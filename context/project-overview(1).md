# Group Ledger

## Overview

Group Ledger is a real-time collaborative expense ledger for groups of people who share expenses during trips, events, or other group activities. Users join a shared group, record expenses and their shares, see updates from other members immediately, and receive an exact settlement plan that minimizes unnecessary payments. The product is designed as a reusable group-finance engine: trips are the first use case, while the underlying ledger can later support roommates, college events, family expenses, and other shared-finance groups.

## Goals

1. Allow a group of users to create a shared ledger and record expenses concurrently with immediate synchronization across connected clients.
2. Maintain exact, auditable financial state using integer-based currency values and deterministic balance calculations.
3. Generate a settlement plan that reduces the number of required payments while preserving the exact net balance of every member.
4. Provide a clear history of expense creation, updates, deletions, and settlements so users can understand how the final balances were produced.
5. Provide AI-powered natural-language queries and transaction-entry assistance on top of verified ledger data without allowing AI to become the source of financial truth.

## Core User Flow

1. User signs in with Clerk.
2. User creates a group ledger for a trip or other shared activity.
3. User invites other people using a shareable invite flow.
4. Members join the group and can see the same current ledger.
5. Any member adds an expense by entering the payer, amount, participants, split method, category, and optional note.
6. The server validates and stores the expense in PostgreSQL through Prisma using integer-based currency values.
7. The updated ledger state is synchronized to connected members through Liveblocks.
8. The system recalculates each member's net balance from the authoritative ledger data.
9. When the group is ready to settle, the settlement engine generates a minimal or near-minimal set of transfers according to the implemented settlement algorithm and its documented constraints.
10. Members can inspect the calculation, mark settlements as completed, and review the audit history.
11. Users can optionally ask natural-language questions or draft an expense through the AI layer; all financial actions require validation and explicit confirmation before being committed.

## Features

### Group and Membership

- Create a group ledger with a name, description, currency, and optional date range.
- Invite members through a controlled invite flow.
- Track membership and role/ownership information.
- Prevent unauthorized users from viewing or mutating group financial data.

### Expense Ledger

- Add, edit, and delete expenses within the user's permitted groups.
- Support equal splitting in the first version, with the data model designed to support additional split methods later.
- Record payer, total amount, participants/shares, category, description, timestamps, and creator.
- Store monetary values as integer minor units such as paise rather than floating-point values.
- Preserve auditable expense events for meaningful mutations.

### Real-Time Collaboration

- Synchronize newly created and updated expenses across connected members.
- Show a live activity feed for important ledger changes.
- Show member presence where useful without treating presence state as financial truth.
- Handle duplicate/retried writes using idempotent server operations.

### Balances and Settlement

- Calculate total group spending and each member's exact net balance.
- Distinguish between members who owe money and members who should receive money.
- Generate settlement transfers from the calculated balances.
- Show the calculation transparently so a user can trace why a balance exists.
- Record settlement completion state separately from calculated debt state.

### AI Assistance

- Answer natural-language questions using verified ledger data through server-side tools.
- Explain balances and spending categories using exact transaction records.
- Convert natural-language expense descriptions into a structured transaction draft.
- Require user confirmation before AI-generated transaction data is written to the ledger.
- Clearly indicate when the available ledger data is insufficient to answer a query.

## Scope

### In Scope

- Web application using Next.js and TypeScript.
- Clerk authentication and group ownership/access control.
- PostgreSQL database with Prisma ORM.
- Real-time collaborative updates using Liveblocks.
- Group creation, invitations, membership, expenses, expense shares, balances, settlements, and audit history.
- Deterministic balance calculation and a documented settlement optimization algorithm.
- Responsive dashboard for group members, expenses, balances, and settlements.
- AI natural-language ledger queries and confirmed natural-language expense drafting.
- Automated validation, error handling, and end-to-end verification for core financial workflows.

### Out of Scope

- Direct bank-account access or bank synchronization.
- Automatic UPI/payment execution in the first version.
- Handling real money transfers inside the application.
- Multi-currency conversion in the first version.
- Native mobile applications.
- Offline-first synchronization and advanced conflict-free replicated data types.
- Enterprise accounting, tax filing, or bookkeeping workflows.
- Autonomous AI actions that create, edit, delete, or settle financial transactions without explicit user confirmation.
- Microservices, dedicated graph databases, or event-streaming infrastructure unless a demonstrated product requirement justifies them later.

## Success Criteria

1. A signed-in user can create a group, invite members, and see the shared ledger.
2. Multiple members can add expenses and receive the updated ledger state without manually refreshing the page.
3. Every stored monetary amount is represented exactly using integer minor units and produces deterministic balance calculations.
4. A group with multiple expenses can produce a settlement plan whose transfers reconcile exactly to all member net balances.
5. A user can inspect the expense and audit history and understand how the current balance was produced.
6. AI-generated financial information is grounded in server-returned ledger data, and no AI-generated mutation is committed without explicit confirmation.
7. Core flows have automated tests and the production build passes without TypeScript, lint, or runtime errors.
