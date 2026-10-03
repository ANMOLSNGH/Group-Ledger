# Unit 08 — Expense UI

## Goal

Build the first user-facing expense flow for Group Ledger. An authenticated ledger member can open a ledger workspace, see existing expenses, open an Add Expense form, enter a payer, amount, description, category, and participants, submit the expense through the existing API, and see the newly created expense without leaving the ledger.

## Design

Use the existing Group Ledger visual system from `ui-context.md` and the reusable shadcn/ui primitives created in Unit 02.

The ledger workspace should have a clear financial hierarchy:

```text
Ledger name
↓
Summary area
↓
Expenses
↓
Add Expense
```

For this unit:

- Keep the existing `/dashboard/[ledgerId]` workspace structure.
- Add a clear `Expenses` section as the primary ledger content.
- Add an `Add Expense` action that opens a dialog or dedicated form surface.
- Use readable amounts with the application currency display convention.
- Keep raw `amountMinor` values internal to the application; do not display paise as if they were rupees.
- Show who paid, the expense description, date/time, category when present, and the participants/shares.
- Use the server response as the authoritative expense result.
- Do not calculate balances in the UI.
- Do not implement settlement or payment actions in this unit.
- Do not add realtime synchronization yet; refresh/revalidate normal server data after a successful creation.

## Implementation

### 1. Expense listing

Extend `/dashboard/[ledgerId]` with an expense list.

The list should:

- fetch expenses for the authorized member;
- show the newest expenses first;
- show an empty state when there are no expenses;
- show:
  - description;
  - payer;
  - total amount;
  - category when present;
  - creation date/time;
  - participant count;
- provide a clear visual distinction between the payer and participants.

Do not calculate a new balance from the expense list.

For this unit, it is acceptable to use a simple server-rendered list or a focused client component fed by server-fetched data, depending on the existing application architecture.

### 2. Expense API integration

Use the existing Unit 07 API:

`POST /api/ledgers/[ledgerId]/expenses`

and:

`GET /api/ledgers/[ledgerId]/expenses/[expenseId]`

Do not duplicate business logic in the frontend.

The client should send only the allowed fields:

- `payerMemberId`
- `amountMinor`
- `description`
- optional `category`
- `participantMemberIds`

The server remains responsible for:

- authentication;
- membership authorization;
- validation;
- equal-share calculation;
- persistence.

### 3. Add Expense form

Create a reusable Add Expense form component.

Fields:

- `description`
- `amount`
- `payer`
- `category`
- `participants`

Requirements:

- description is required;
- amount is required and entered by the user in normal currency units such as rupees;
- payer is selected from current ledger members;
- participants are selected from current ledger members;
- at least one participant is required;
- the current authenticated member may be selected like any other member;
- all participants are equal-share participants in this unit.

Do not expose or require `amountMinor` in the user-facing form.

### 4. Currency conversion at the UI boundary

The UI accepts a decimal currency input such as:

```text
1250
1250.50
```

Convert it to integer minor units before sending the API request.

Requirements:

- reject invalid numeric input;
- reject zero and negative values;
- reject malformed decimal values;
- ensure conversion does not introduce floating-point rounding errors;
- preserve at most two fractional digits for INR in V1;
- send an integer `amountMinor` to the API.

Keep this conversion in a small, tested utility rather than spreading arithmetic across components.

### 5. Member selection

Load the current ledger members using the existing membership API.

The UI should:

- display member names where available;
- fall back safely when only an identifier/display fallback exists;
- prevent selecting a member outside the current ledger;
- prevent duplicate participant selections;
- make the payer selection single-select;
- make the participant selection multi-select.

Do not allow the UI to manually type arbitrary member IDs.

### 6. Client-side validation

Perform lightweight client-side validation for immediate feedback.

Validate:

- required description;
- positive currency value;
- valid decimal format;
- payer selected;
- at least one participant;
- no duplicate participants.

Client validation improves UX but does not replace server validation.

### 7. Submission state

During submission:

- disable duplicate submission;
- show a clear loading state;
- preserve entered data if the request fails;
- display a useful error without exposing server internals.

On success:

1. close the Add Expense dialog/form;
2. refresh or revalidate the expense data;
3. show the newly created expense;
4. clear transient form state.

Do not optimistically display an expense as permanently committed before the server confirms it.

### 8. Expense detail presentation

For each expense, provide enough information for the user to understand the transaction:

```text
Hotel
Paid by Rahul
₹1,200
3 participants

Rahul     ₹400
Aman      ₹400
Simran    ₹400
```

For remainder cases, display the exact server-calculated shares returned by the API rather than recomputing them in the UI.

### 9. Error and access states

Handle:

- unauthenticated user;
- non-member access denial;
- missing ledger;
- empty expense list;
- failed member load;
- failed expense load;
- failed expense creation;
- invalid server response.

Do not expose stack traces or raw database errors.

### 10. Responsive behavior

Desktop:

- ledger information and expense content use the available workspace width;
- Add Expense action remains easy to find;
- expense rows/cards remain compact.

Mobile:

- expense entries stack cleanly;
- Add Expense action remains reachable;
- member selection remains usable without horizontal scrolling;
- dialog/form content fits within the viewport.

## Dependencies

- Existing Clerk authentication and ledger membership from Units 03 and 06.
- Existing ledger workspace from Unit 05.
- Existing expense API and Prisma models from Unit 07.
- Existing shadcn/ui components from Unit 02.
- Existing member listing API from Unit 06.
- No new external dependency should be introduced unless required by the existing application and explicitly justified.

## Verify when done

- [ ] An authorized ledger member can open `/dashboard/[ledgerId]` and see the Expenses section.
- [ ] Existing expenses are displayed newest first.
- [ ] Empty state is displayed when no expenses exist.
- [ ] Add Expense form opens correctly.
- [ ] Payer selection is limited to ledger members.
- [ ] Participant selection is limited to ledger members.
- [ ] Duplicate participant selection is prevented.
- [ ] Description validation works.
- [ ] Currency input accepts valid rupee values and converts them to integer minor units without floating-point errors.
- [ ] Invalid, zero, negative, and malformed amounts are rejected.
- [ ] At most two decimal places are accepted for INR.
- [ ] Successful submission calls the existing expense API.
- [ ] The UI never supplies authoritative share amounts.
- [ ] The UI displays server-returned shares.
- [ ] Failed submission preserves form data and shows a user-safe error.
- [ ] Duplicate submissions are prevented while a request is in progress.
- [ ] Newly created expenses appear after successful server confirmation.
- [ ] Unauthorized users cannot use the expense UI to bypass server authorization.
- [ ] No balance calculation is implemented in the UI.
- [ ] No settlement, payment execution, Liveblocks synchronization, or AI behavior is added.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Automated tests cover currency-to-minor-unit conversion and invalid input cases.
- [ ] Manual verification covers adding an expense, selecting members, a whole-number amount, a two-decimal amount, a remainder split, and a failed request.
