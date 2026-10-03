
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ledger
 * 
 */
export type Ledger = $Result.DefaultSelection<Prisma.$LedgerPayload>
/**
 * Model LedgerMember
 * 
 */
export type LedgerMember = $Result.DefaultSelection<Prisma.$LedgerMemberPayload>
/**
 * Model LedgerInvite
 * 
 */
export type LedgerInvite = $Result.DefaultSelection<Prisma.$LedgerInvitePayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model ExpenseShare
 * 
 */
export type ExpenseShare = $Result.DefaultSelection<Prisma.$ExpenseSharePayload>
/**
 * Model AuditEvent
 * 
 */
export type AuditEvent = $Result.DefaultSelection<Prisma.$AuditEventPayload>
/**
 * Model Settlement
 * 
 */
export type Settlement = $Result.DefaultSelection<Prisma.$SettlementPayload>
/**
 * Model SettlementTransfer
 * 
 */
export type SettlementTransfer = $Result.DefaultSelection<Prisma.$SettlementTransferPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LedgerType: {
  TRIP: 'TRIP',
  HOME: 'HOME',
  COUPLE: 'COUPLE',
  OTHER: 'OTHER'
};

export type LedgerType = (typeof LedgerType)[keyof typeof LedgerType]


export const MemberRole: {
  OWNER: 'OWNER',
  MEMBER: 'MEMBER'
};

export type MemberRole = (typeof MemberRole)[keyof typeof MemberRole]


export const SplitType: {
  EQUAL: 'EQUAL'
};

export type SplitType = (typeof SplitType)[keyof typeof SplitType]


export const ExpenseCategory: {
  ACCOMMODATION: 'ACCOMMODATION',
  TRANSPORTATION: 'TRANSPORTATION',
  FOOD: 'FOOD',
  ENTERTAINMENT: 'ENTERTAINMENT',
  OTHER: 'OTHER'
};

export type ExpenseCategory = (typeof ExpenseCategory)[keyof typeof ExpenseCategory]


export const AuditEventType: {
  EXPENSE_CREATED: 'EXPENSE_CREATED',
  EXPENSE_UPDATED: 'EXPENSE_UPDATED',
  EXPENSE_DELETED: 'EXPENSE_DELETED',
  SETTLEMENT_CREATED: 'SETTLEMENT_CREATED',
  SETTLEMENT_COMPLETED: 'SETTLEMENT_COMPLETED'
};

export type AuditEventType = (typeof AuditEventType)[keyof typeof AuditEventType]


export const AuditEntityType: {
  EXPENSE: 'EXPENSE',
  SETTLEMENT: 'SETTLEMENT'
};

export type AuditEntityType = (typeof AuditEntityType)[keyof typeof AuditEntityType]


export const SettlementStatus: {
  PROPOSED: 'PROPOSED',
  COMPLETED: 'COMPLETED'
};

export type SettlementStatus = (typeof SettlementStatus)[keyof typeof SettlementStatus]

}

export type LedgerType = $Enums.LedgerType

export const LedgerType: typeof $Enums.LedgerType

export type MemberRole = $Enums.MemberRole

export const MemberRole: typeof $Enums.MemberRole

export type SplitType = $Enums.SplitType

export const SplitType: typeof $Enums.SplitType

export type ExpenseCategory = $Enums.ExpenseCategory

export const ExpenseCategory: typeof $Enums.ExpenseCategory

export type AuditEventType = $Enums.AuditEventType

export const AuditEventType: typeof $Enums.AuditEventType

export type AuditEntityType = $Enums.AuditEntityType

export const AuditEntityType: typeof $Enums.AuditEntityType

export type SettlementStatus = $Enums.SettlementStatus

export const SettlementStatus: typeof $Enums.SettlementStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Ledgers
 * const ledgers = await prisma.ledger.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Ledgers
   * const ledgers = await prisma.ledger.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ledger`: Exposes CRUD operations for the **Ledger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ledgers
    * const ledgers = await prisma.ledger.findMany()
    * ```
    */
  get ledger(): Prisma.LedgerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ledgerMember`: Exposes CRUD operations for the **LedgerMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerMembers
    * const ledgerMembers = await prisma.ledgerMember.findMany()
    * ```
    */
  get ledgerMember(): Prisma.LedgerMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ledgerInvite`: Exposes CRUD operations for the **LedgerInvite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerInvites
    * const ledgerInvites = await prisma.ledgerInvite.findMany()
    * ```
    */
  get ledgerInvite(): Prisma.LedgerInviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseShare`: Exposes CRUD operations for the **ExpenseShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseShares
    * const expenseShares = await prisma.expenseShare.findMany()
    * ```
    */
  get expenseShare(): Prisma.ExpenseShareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditEvent`: Exposes CRUD operations for the **AuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditEvents
    * const auditEvents = await prisma.auditEvent.findMany()
    * ```
    */
  get auditEvent(): Prisma.AuditEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settlement`: Exposes CRUD operations for the **Settlement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settlements
    * const settlements = await prisma.settlement.findMany()
    * ```
    */
  get settlement(): Prisma.SettlementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settlementTransfer`: Exposes CRUD operations for the **SettlementTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SettlementTransfers
    * const settlementTransfers = await prisma.settlementTransfer.findMany()
    * ```
    */
  get settlementTransfer(): Prisma.SettlementTransferDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Ledger: 'Ledger',
    LedgerMember: 'LedgerMember',
    LedgerInvite: 'LedgerInvite',
    Expense: 'Expense',
    ExpenseShare: 'ExpenseShare',
    AuditEvent: 'AuditEvent',
    Settlement: 'Settlement',
    SettlementTransfer: 'SettlementTransfer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ledger" | "ledgerMember" | "ledgerInvite" | "expense" | "expenseShare" | "auditEvent" | "settlement" | "settlementTransfer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Ledger: {
        payload: Prisma.$LedgerPayload<ExtArgs>
        fields: Prisma.LedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          findFirst: {
            args: Prisma.LedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          findMany: {
            args: Prisma.LedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>[]
          }
          create: {
            args: Prisma.LedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          createMany: {
            args: Prisma.LedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>[]
          }
          delete: {
            args: Prisma.LedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          update: {
            args: Prisma.LedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          deleteMany: {
            args: Prisma.LedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LedgerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>[]
          }
          upsert: {
            args: Prisma.LedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          aggregate: {
            args: Prisma.LedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedger>
          }
          groupBy: {
            args: Prisma.LedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerCountAggregateOutputType> | number
          }
        }
      }
      LedgerMember: {
        payload: Prisma.$LedgerMemberPayload<ExtArgs>
        fields: Prisma.LedgerMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerMemberPayload>
          }
          findFirst: {
            args: Prisma.LedgerMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerMemberPayload>
          }
          findMany: {
            args: Prisma.LedgerMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerMemberPayload>[]
          }
          create: {
            args: Prisma.LedgerMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerMemberPayload>
          }
          createMany: {
            args: Prisma.LedgerMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerMemberPayload>[]
          }
          delete: {
            args: Prisma.LedgerMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerMemberPayload>
          }
          update: {
            args: Prisma.LedgerMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerMemberPayload>
          }
          deleteMany: {
            args: Prisma.LedgerMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LedgerMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerMemberPayload>[]
          }
          upsert: {
            args: Prisma.LedgerMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerMemberPayload>
          }
          aggregate: {
            args: Prisma.LedgerMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerMember>
          }
          groupBy: {
            args: Prisma.LedgerMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerMemberCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerMemberCountAggregateOutputType> | number
          }
        }
      }
      LedgerInvite: {
        payload: Prisma.$LedgerInvitePayload<ExtArgs>
        fields: Prisma.LedgerInviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerInviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerInvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerInviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerInvitePayload>
          }
          findFirst: {
            args: Prisma.LedgerInviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerInvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerInviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerInvitePayload>
          }
          findMany: {
            args: Prisma.LedgerInviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerInvitePayload>[]
          }
          create: {
            args: Prisma.LedgerInviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerInvitePayload>
          }
          createMany: {
            args: Prisma.LedgerInviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerInviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerInvitePayload>[]
          }
          delete: {
            args: Prisma.LedgerInviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerInvitePayload>
          }
          update: {
            args: Prisma.LedgerInviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerInvitePayload>
          }
          deleteMany: {
            args: Prisma.LedgerInviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerInviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LedgerInviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerInvitePayload>[]
          }
          upsert: {
            args: Prisma.LedgerInviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerInvitePayload>
          }
          aggregate: {
            args: Prisma.LedgerInviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerInvite>
          }
          groupBy: {
            args: Prisma.LedgerInviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerInviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerInviteCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerInviteCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      ExpenseShare: {
        payload: Prisma.$ExpenseSharePayload<ExtArgs>
        fields: Prisma.ExpenseShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
          }
          findFirst: {
            args: Prisma.ExpenseShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
          }
          findMany: {
            args: Prisma.ExpenseShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>[]
          }
          create: {
            args: Prisma.ExpenseShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
          }
          createMany: {
            args: Prisma.ExpenseShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>[]
          }
          delete: {
            args: Prisma.ExpenseShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
          }
          update: {
            args: Prisma.ExpenseShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseSharePayload>
          }
          aggregate: {
            args: Prisma.ExpenseShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseShare>
          }
          groupBy: {
            args: Prisma.ExpenseShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseShareCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseShareCountAggregateOutputType> | number
          }
        }
      }
      AuditEvent: {
        payload: Prisma.$AuditEventPayload<ExtArgs>
        fields: Prisma.AuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findFirst: {
            args: Prisma.AuditEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findMany: {
            args: Prisma.AuditEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          create: {
            args: Prisma.AuditEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          createMany: {
            args: Prisma.AuditEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          delete: {
            args: Prisma.AuditEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          update: {
            args: Prisma.AuditEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          deleteMany: {
            args: Prisma.AuditEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          upsert: {
            args: Prisma.AuditEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          aggregate: {
            args: Prisma.AuditEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditEvent>
          }
          groupBy: {
            args: Prisma.AuditEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditEventCountArgs<ExtArgs>
            result: $Utils.Optional<AuditEventCountAggregateOutputType> | number
          }
        }
      }
      Settlement: {
        payload: Prisma.$SettlementPayload<ExtArgs>
        fields: Prisma.SettlementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettlementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettlementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          findFirst: {
            args: Prisma.SettlementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettlementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          findMany: {
            args: Prisma.SettlementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          create: {
            args: Prisma.SettlementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          createMany: {
            args: Prisma.SettlementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettlementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          delete: {
            args: Prisma.SettlementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          update: {
            args: Prisma.SettlementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          deleteMany: {
            args: Prisma.SettlementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettlementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettlementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>[]
          }
          upsert: {
            args: Prisma.SettlementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementPayload>
          }
          aggregate: {
            args: Prisma.SettlementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettlement>
          }
          groupBy: {
            args: Prisma.SettlementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettlementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettlementCountArgs<ExtArgs>
            result: $Utils.Optional<SettlementCountAggregateOutputType> | number
          }
        }
      }
      SettlementTransfer: {
        payload: Prisma.$SettlementTransferPayload<ExtArgs>
        fields: Prisma.SettlementTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettlementTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettlementTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementTransferPayload>
          }
          findFirst: {
            args: Prisma.SettlementTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettlementTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementTransferPayload>
          }
          findMany: {
            args: Prisma.SettlementTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementTransferPayload>[]
          }
          create: {
            args: Prisma.SettlementTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementTransferPayload>
          }
          createMany: {
            args: Prisma.SettlementTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettlementTransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementTransferPayload>[]
          }
          delete: {
            args: Prisma.SettlementTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementTransferPayload>
          }
          update: {
            args: Prisma.SettlementTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementTransferPayload>
          }
          deleteMany: {
            args: Prisma.SettlementTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettlementTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettlementTransferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementTransferPayload>[]
          }
          upsert: {
            args: Prisma.SettlementTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementTransferPayload>
          }
          aggregate: {
            args: Prisma.SettlementTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettlementTransfer>
          }
          groupBy: {
            args: Prisma.SettlementTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettlementTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettlementTransferCountArgs<ExtArgs>
            result: $Utils.Optional<SettlementTransferCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    ledger?: LedgerOmit
    ledgerMember?: LedgerMemberOmit
    ledgerInvite?: LedgerInviteOmit
    expense?: ExpenseOmit
    expenseShare?: ExpenseShareOmit
    auditEvent?: AuditEventOmit
    settlement?: SettlementOmit
    settlementTransfer?: SettlementTransferOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LedgerCountOutputType
   */

  export type LedgerCountOutputType = {
    members: number
    invites: number
    expenses: number
    auditEvents: number
    settlements: number
  }

  export type LedgerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | LedgerCountOutputTypeCountMembersArgs
    invites?: boolean | LedgerCountOutputTypeCountInvitesArgs
    expenses?: boolean | LedgerCountOutputTypeCountExpensesArgs
    auditEvents?: boolean | LedgerCountOutputTypeCountAuditEventsArgs
    settlements?: boolean | LedgerCountOutputTypeCountSettlementsArgs
  }

  // Custom InputTypes
  /**
   * LedgerCountOutputType without action
   */
  export type LedgerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerCountOutputType
     */
    select?: LedgerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LedgerCountOutputType without action
   */
  export type LedgerCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerMemberWhereInput
  }

  /**
   * LedgerCountOutputType without action
   */
  export type LedgerCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerInviteWhereInput
  }

  /**
   * LedgerCountOutputType without action
   */
  export type LedgerCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * LedgerCountOutputType without action
   */
  export type LedgerCountOutputTypeCountAuditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
  }

  /**
   * LedgerCountOutputType without action
   */
  export type LedgerCountOutputTypeCountSettlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
  }


  /**
   * Count Type LedgerMemberCountOutputType
   */

  export type LedgerMemberCountOutputType = {
    paidExpenses: number
    shares: number
  }

  export type LedgerMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paidExpenses?: boolean | LedgerMemberCountOutputTypeCountPaidExpensesArgs
    shares?: boolean | LedgerMemberCountOutputTypeCountSharesArgs
  }

  // Custom InputTypes
  /**
   * LedgerMemberCountOutputType without action
   */
  export type LedgerMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMemberCountOutputType
     */
    select?: LedgerMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LedgerMemberCountOutputType without action
   */
  export type LedgerMemberCountOutputTypeCountPaidExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * LedgerMemberCountOutputType without action
   */
  export type LedgerMemberCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseShareWhereInput
  }


  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    shares: number
  }

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shares?: boolean | ExpenseCountOutputTypeCountSharesArgs
  }

  // Custom InputTypes
  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseShareWhereInput
  }


  /**
   * Count Type SettlementCountOutputType
   */

  export type SettlementCountOutputType = {
    transfers: number
  }

  export type SettlementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transfers?: boolean | SettlementCountOutputTypeCountTransfersArgs
  }

  // Custom InputTypes
  /**
   * SettlementCountOutputType without action
   */
  export type SettlementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementCountOutputType
     */
    select?: SettlementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SettlementCountOutputType without action
   */
  export type SettlementCountOutputTypeCountTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementTransferWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Ledger
   */

  export type AggregateLedger = {
    _count: LedgerCountAggregateOutputType | null
    _min: LedgerMinAggregateOutputType | null
    _max: LedgerMaxAggregateOutputType | null
  }

  export type LedgerMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    description: string | null
    type: $Enums.LedgerType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LedgerMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    description: string | null
    type: $Enums.LedgerType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LedgerCountAggregateOutputType = {
    id: number
    ownerId: number
    name: number
    description: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LedgerMinAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LedgerMaxAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LedgerCountAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ledger to aggregate.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ledgers
    **/
    _count?: true | LedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerMaxAggregateInputType
  }

  export type GetLedgerAggregateType<T extends LedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedger[P]>
      : GetScalarType<T[P], AggregateLedger[P]>
  }




  export type LedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerWhereInput
    orderBy?: LedgerOrderByWithAggregationInput | LedgerOrderByWithAggregationInput[]
    by: LedgerScalarFieldEnum[] | LedgerScalarFieldEnum
    having?: LedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerCountAggregateInputType | true
    _min?: LedgerMinAggregateInputType
    _max?: LedgerMaxAggregateInputType
  }

  export type LedgerGroupByOutputType = {
    id: string
    ownerId: string
    name: string
    description: string | null
    type: $Enums.LedgerType
    createdAt: Date
    updatedAt: Date
    _count: LedgerCountAggregateOutputType | null
    _min: LedgerMinAggregateOutputType | null
    _max: LedgerMaxAggregateOutputType | null
  }

  type GetLedgerGroupByPayload<T extends LedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerGroupByOutputType[P]>
        }
      >
    >


  export type LedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Ledger$membersArgs<ExtArgs>
    invites?: boolean | Ledger$invitesArgs<ExtArgs>
    expenses?: boolean | Ledger$expensesArgs<ExtArgs>
    auditEvents?: boolean | Ledger$auditEventsArgs<ExtArgs>
    settlements?: boolean | Ledger$settlementsArgs<ExtArgs>
    _count?: boolean | LedgerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledger"]>

  export type LedgerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ledger"]>

  export type LedgerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ledger"]>

  export type LedgerSelectScalar = {
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LedgerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "name" | "description" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["ledger"]>
  export type LedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Ledger$membersArgs<ExtArgs>
    invites?: boolean | Ledger$invitesArgs<ExtArgs>
    expenses?: boolean | Ledger$expensesArgs<ExtArgs>
    auditEvents?: boolean | Ledger$auditEventsArgs<ExtArgs>
    settlements?: boolean | Ledger$settlementsArgs<ExtArgs>
    _count?: boolean | LedgerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LedgerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LedgerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ledger"
    objects: {
      members: Prisma.$LedgerMemberPayload<ExtArgs>[]
      invites: Prisma.$LedgerInvitePayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      auditEvents: Prisma.$AuditEventPayload<ExtArgs>[]
      settlements: Prisma.$SettlementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      name: string
      description: string | null
      type: $Enums.LedgerType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ledger"]>
    composites: {}
  }

  type LedgerGetPayload<S extends boolean | null | undefined | LedgerDefaultArgs> = $Result.GetResult<Prisma.$LedgerPayload, S>

  type LedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LedgerCountAggregateInputType | true
    }

  export interface LedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ledger'], meta: { name: 'Ledger' } }
    /**
     * Find zero or one Ledger that matches the filter.
     * @param {LedgerFindUniqueArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerFindUniqueArgs>(args: SelectSubset<T, LedgerFindUniqueArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ledger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LedgerFindUniqueOrThrowArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ledger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerFindFirstArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerFindFirstArgs>(args?: SelectSubset<T, LedgerFindFirstArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ledger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerFindFirstOrThrowArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ledgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ledgers
     * const ledgers = await prisma.ledger.findMany()
     * 
     * // Get first 10 Ledgers
     * const ledgers = await prisma.ledger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerWithIdOnly = await prisma.ledger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerFindManyArgs>(args?: SelectSubset<T, LedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ledger.
     * @param {LedgerCreateArgs} args - Arguments to create a Ledger.
     * @example
     * // Create one Ledger
     * const Ledger = await prisma.ledger.create({
     *   data: {
     *     // ... data to create a Ledger
     *   }
     * })
     * 
     */
    create<T extends LedgerCreateArgs>(args: SelectSubset<T, LedgerCreateArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ledgers.
     * @param {LedgerCreateManyArgs} args - Arguments to create many Ledgers.
     * @example
     * // Create many Ledgers
     * const ledger = await prisma.ledger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerCreateManyArgs>(args?: SelectSubset<T, LedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ledgers and returns the data saved in the database.
     * @param {LedgerCreateManyAndReturnArgs} args - Arguments to create many Ledgers.
     * @example
     * // Create many Ledgers
     * const ledger = await prisma.ledger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ledgers and only return the `id`
     * const ledgerWithIdOnly = await prisma.ledger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ledger.
     * @param {LedgerDeleteArgs} args - Arguments to delete one Ledger.
     * @example
     * // Delete one Ledger
     * const Ledger = await prisma.ledger.delete({
     *   where: {
     *     // ... filter to delete one Ledger
     *   }
     * })
     * 
     */
    delete<T extends LedgerDeleteArgs>(args: SelectSubset<T, LedgerDeleteArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ledger.
     * @param {LedgerUpdateArgs} args - Arguments to update one Ledger.
     * @example
     * // Update one Ledger
     * const ledger = await prisma.ledger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerUpdateArgs>(args: SelectSubset<T, LedgerUpdateArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ledgers.
     * @param {LedgerDeleteManyArgs} args - Arguments to filter Ledgers to delete.
     * @example
     * // Delete a few Ledgers
     * const { count } = await prisma.ledger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerDeleteManyArgs>(args?: SelectSubset<T, LedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ledgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ledgers
     * const ledger = await prisma.ledger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerUpdateManyArgs>(args: SelectSubset<T, LedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ledgers and returns the data updated in the database.
     * @param {LedgerUpdateManyAndReturnArgs} args - Arguments to update many Ledgers.
     * @example
     * // Update many Ledgers
     * const ledger = await prisma.ledger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ledgers and only return the `id`
     * const ledgerWithIdOnly = await prisma.ledger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LedgerUpdateManyAndReturnArgs>(args: SelectSubset<T, LedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ledger.
     * @param {LedgerUpsertArgs} args - Arguments to update or create a Ledger.
     * @example
     * // Update or create a Ledger
     * const ledger = await prisma.ledger.upsert({
     *   create: {
     *     // ... data to create a Ledger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ledger we want to update
     *   }
     * })
     */
    upsert<T extends LedgerUpsertArgs>(args: SelectSubset<T, LedgerUpsertArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ledgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerCountArgs} args - Arguments to filter Ledgers to count.
     * @example
     * // Count the number of Ledgers
     * const count = await prisma.ledger.count({
     *   where: {
     *     // ... the filter for the Ledgers we want to count
     *   }
     * })
    **/
    count<T extends LedgerCountArgs>(
      args?: Subset<T, LedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ledger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LedgerAggregateArgs>(args: Subset<T, LedgerAggregateArgs>): Prisma.PrismaPromise<GetLedgerAggregateType<T>>

    /**
     * Group by Ledger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerGroupByArgs['orderBy'] }
        : { orderBy?: LedgerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ledger model
   */
  readonly fields: LedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ledger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Ledger$membersArgs<ExtArgs> = {}>(args?: Subset<T, Ledger$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invites<T extends Ledger$invitesArgs<ExtArgs> = {}>(args?: Subset<T, Ledger$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Ledger$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Ledger$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditEvents<T extends Ledger$auditEventsArgs<ExtArgs> = {}>(args?: Subset<T, Ledger$auditEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlements<T extends Ledger$settlementsArgs<ExtArgs> = {}>(args?: Subset<T, Ledger$settlementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ledger model
   */
  interface LedgerFieldRefs {
    readonly id: FieldRef<"Ledger", 'String'>
    readonly ownerId: FieldRef<"Ledger", 'String'>
    readonly name: FieldRef<"Ledger", 'String'>
    readonly description: FieldRef<"Ledger", 'String'>
    readonly type: FieldRef<"Ledger", 'LedgerType'>
    readonly createdAt: FieldRef<"Ledger", 'DateTime'>
    readonly updatedAt: FieldRef<"Ledger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ledger findUnique
   */
  export type LedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger findUniqueOrThrow
   */
  export type LedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger findFirst
   */
  export type LedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ledgers.
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ledgers.
     */
    distinct?: LedgerScalarFieldEnum | LedgerScalarFieldEnum[]
  }

  /**
   * Ledger findFirstOrThrow
   */
  export type LedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ledgers.
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ledgers.
     */
    distinct?: LedgerScalarFieldEnum | LedgerScalarFieldEnum[]
  }

  /**
   * Ledger findMany
   */
  export type LedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledgers to fetch.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ledgers.
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ledgers.
     */
    distinct?: LedgerScalarFieldEnum | LedgerScalarFieldEnum[]
  }

  /**
   * Ledger create
   */
  export type LedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a Ledger.
     */
    data: XOR<LedgerCreateInput, LedgerUncheckedCreateInput>
  }

  /**
   * Ledger createMany
   */
  export type LedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ledgers.
     */
    data: LedgerCreateManyInput | LedgerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ledger createManyAndReturn
   */
  export type LedgerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * The data used to create many Ledgers.
     */
    data: LedgerCreateManyInput | LedgerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ledger update
   */
  export type LedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a Ledger.
     */
    data: XOR<LedgerUpdateInput, LedgerUncheckedUpdateInput>
    /**
     * Choose, which Ledger to update.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger updateMany
   */
  export type LedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ledgers.
     */
    data: XOR<LedgerUpdateManyMutationInput, LedgerUncheckedUpdateManyInput>
    /**
     * Filter which Ledgers to update
     */
    where?: LedgerWhereInput
    /**
     * Limit how many Ledgers to update.
     */
    limit?: number
  }

  /**
   * Ledger updateManyAndReturn
   */
  export type LedgerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * The data used to update Ledgers.
     */
    data: XOR<LedgerUpdateManyMutationInput, LedgerUncheckedUpdateManyInput>
    /**
     * Filter which Ledgers to update
     */
    where?: LedgerWhereInput
    /**
     * Limit how many Ledgers to update.
     */
    limit?: number
  }

  /**
   * Ledger upsert
   */
  export type LedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the Ledger to update in case it exists.
     */
    where: LedgerWhereUniqueInput
    /**
     * In case the Ledger found by the `where` argument doesn't exist, create a new Ledger with this data.
     */
    create: XOR<LedgerCreateInput, LedgerUncheckedCreateInput>
    /**
     * In case the Ledger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerUpdateInput, LedgerUncheckedUpdateInput>
  }

  /**
   * Ledger delete
   */
  export type LedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter which Ledger to delete.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger deleteMany
   */
  export type LedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ledgers to delete
     */
    where?: LedgerWhereInput
    /**
     * Limit how many Ledgers to delete.
     */
    limit?: number
  }

  /**
   * Ledger.members
   */
  export type Ledger$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberInclude<ExtArgs> | null
    where?: LedgerMemberWhereInput
    orderBy?: LedgerMemberOrderByWithRelationInput | LedgerMemberOrderByWithRelationInput[]
    cursor?: LedgerMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerMemberScalarFieldEnum | LedgerMemberScalarFieldEnum[]
  }

  /**
   * Ledger.invites
   */
  export type Ledger$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteInclude<ExtArgs> | null
    where?: LedgerInviteWhereInput
    orderBy?: LedgerInviteOrderByWithRelationInput | LedgerInviteOrderByWithRelationInput[]
    cursor?: LedgerInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerInviteScalarFieldEnum | LedgerInviteScalarFieldEnum[]
  }

  /**
   * Ledger.expenses
   */
  export type Ledger$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Ledger.auditEvents
   */
  export type Ledger$auditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    cursor?: AuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * Ledger.settlements
   */
  export type Ledger$settlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    cursor?: SettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Ledger without action
   */
  export type LedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
  }


  /**
   * Model LedgerMember
   */

  export type AggregateLedgerMember = {
    _count: LedgerMemberCountAggregateOutputType | null
    _min: LedgerMemberMinAggregateOutputType | null
    _max: LedgerMemberMaxAggregateOutputType | null
  }

  export type LedgerMemberMinAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    clerkUserId: string | null
    role: $Enums.MemberRole | null
    createdAt: Date | null
  }

  export type LedgerMemberMaxAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    clerkUserId: string | null
    role: $Enums.MemberRole | null
    createdAt: Date | null
  }

  export type LedgerMemberCountAggregateOutputType = {
    id: number
    ledgerId: number
    clerkUserId: number
    role: number
    createdAt: number
    _all: number
  }


  export type LedgerMemberMinAggregateInputType = {
    id?: true
    ledgerId?: true
    clerkUserId?: true
    role?: true
    createdAt?: true
  }

  export type LedgerMemberMaxAggregateInputType = {
    id?: true
    ledgerId?: true
    clerkUserId?: true
    role?: true
    createdAt?: true
  }

  export type LedgerMemberCountAggregateInputType = {
    id?: true
    ledgerId?: true
    clerkUserId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type LedgerMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerMember to aggregate.
     */
    where?: LedgerMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerMembers to fetch.
     */
    orderBy?: LedgerMemberOrderByWithRelationInput | LedgerMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerMembers
    **/
    _count?: true | LedgerMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerMemberMaxAggregateInputType
  }

  export type GetLedgerMemberAggregateType<T extends LedgerMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerMember[P]>
      : GetScalarType<T[P], AggregateLedgerMember[P]>
  }




  export type LedgerMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerMemberWhereInput
    orderBy?: LedgerMemberOrderByWithAggregationInput | LedgerMemberOrderByWithAggregationInput[]
    by: LedgerMemberScalarFieldEnum[] | LedgerMemberScalarFieldEnum
    having?: LedgerMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerMemberCountAggregateInputType | true
    _min?: LedgerMemberMinAggregateInputType
    _max?: LedgerMemberMaxAggregateInputType
  }

  export type LedgerMemberGroupByOutputType = {
    id: string
    ledgerId: string
    clerkUserId: string
    role: $Enums.MemberRole
    createdAt: Date
    _count: LedgerMemberCountAggregateOutputType | null
    _min: LedgerMemberMinAggregateOutputType | null
    _max: LedgerMemberMaxAggregateOutputType | null
  }

  type GetLedgerMemberGroupByPayload<T extends LedgerMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerMemberGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerMemberGroupByOutputType[P]>
        }
      >
    >


  export type LedgerMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    clerkUserId?: boolean
    role?: boolean
    createdAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
    paidExpenses?: boolean | LedgerMember$paidExpensesArgs<ExtArgs>
    shares?: boolean | LedgerMember$sharesArgs<ExtArgs>
    _count?: boolean | LedgerMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerMember"]>

  export type LedgerMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    clerkUserId?: boolean
    role?: boolean
    createdAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerMember"]>

  export type LedgerMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    clerkUserId?: boolean
    role?: boolean
    createdAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerMember"]>

  export type LedgerMemberSelectScalar = {
    id?: boolean
    ledgerId?: boolean
    clerkUserId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type LedgerMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ledgerId" | "clerkUserId" | "role" | "createdAt", ExtArgs["result"]["ledgerMember"]>
  export type LedgerMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
    paidExpenses?: boolean | LedgerMember$paidExpensesArgs<ExtArgs>
    shares?: boolean | LedgerMember$sharesArgs<ExtArgs>
    _count?: boolean | LedgerMemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LedgerMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }
  export type LedgerMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }

  export type $LedgerMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerMember"
    objects: {
      ledger: Prisma.$LedgerPayload<ExtArgs>
      paidExpenses: Prisma.$ExpensePayload<ExtArgs>[]
      shares: Prisma.$ExpenseSharePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ledgerId: string
      clerkUserId: string
      role: $Enums.MemberRole
      createdAt: Date
    }, ExtArgs["result"]["ledgerMember"]>
    composites: {}
  }

  type LedgerMemberGetPayload<S extends boolean | null | undefined | LedgerMemberDefaultArgs> = $Result.GetResult<Prisma.$LedgerMemberPayload, S>

  type LedgerMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LedgerMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LedgerMemberCountAggregateInputType | true
    }

  export interface LedgerMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerMember'], meta: { name: 'LedgerMember' } }
    /**
     * Find zero or one LedgerMember that matches the filter.
     * @param {LedgerMemberFindUniqueArgs} args - Arguments to find a LedgerMember
     * @example
     * // Get one LedgerMember
     * const ledgerMember = await prisma.ledgerMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerMemberFindUniqueArgs>(args: SelectSubset<T, LedgerMemberFindUniqueArgs<ExtArgs>>): Prisma__LedgerMemberClient<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LedgerMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LedgerMemberFindUniqueOrThrowArgs} args - Arguments to find a LedgerMember
     * @example
     * // Get one LedgerMember
     * const ledgerMember = await prisma.ledgerMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerMemberClient<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerMemberFindFirstArgs} args - Arguments to find a LedgerMember
     * @example
     * // Get one LedgerMember
     * const ledgerMember = await prisma.ledgerMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerMemberFindFirstArgs>(args?: SelectSubset<T, LedgerMemberFindFirstArgs<ExtArgs>>): Prisma__LedgerMemberClient<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerMemberFindFirstOrThrowArgs} args - Arguments to find a LedgerMember
     * @example
     * // Get one LedgerMember
     * const ledgerMember = await prisma.ledgerMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerMemberClient<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LedgerMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerMembers
     * const ledgerMembers = await prisma.ledgerMember.findMany()
     * 
     * // Get first 10 LedgerMembers
     * const ledgerMembers = await prisma.ledgerMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerMemberWithIdOnly = await prisma.ledgerMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerMemberFindManyArgs>(args?: SelectSubset<T, LedgerMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LedgerMember.
     * @param {LedgerMemberCreateArgs} args - Arguments to create a LedgerMember.
     * @example
     * // Create one LedgerMember
     * const LedgerMember = await prisma.ledgerMember.create({
     *   data: {
     *     // ... data to create a LedgerMember
     *   }
     * })
     * 
     */
    create<T extends LedgerMemberCreateArgs>(args: SelectSubset<T, LedgerMemberCreateArgs<ExtArgs>>): Prisma__LedgerMemberClient<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LedgerMembers.
     * @param {LedgerMemberCreateManyArgs} args - Arguments to create many LedgerMembers.
     * @example
     * // Create many LedgerMembers
     * const ledgerMember = await prisma.ledgerMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerMemberCreateManyArgs>(args?: SelectSubset<T, LedgerMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerMembers and returns the data saved in the database.
     * @param {LedgerMemberCreateManyAndReturnArgs} args - Arguments to create many LedgerMembers.
     * @example
     * // Create many LedgerMembers
     * const ledgerMember = await prisma.ledgerMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerMembers and only return the `id`
     * const ledgerMemberWithIdOnly = await prisma.ledgerMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LedgerMember.
     * @param {LedgerMemberDeleteArgs} args - Arguments to delete one LedgerMember.
     * @example
     * // Delete one LedgerMember
     * const LedgerMember = await prisma.ledgerMember.delete({
     *   where: {
     *     // ... filter to delete one LedgerMember
     *   }
     * })
     * 
     */
    delete<T extends LedgerMemberDeleteArgs>(args: SelectSubset<T, LedgerMemberDeleteArgs<ExtArgs>>): Prisma__LedgerMemberClient<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LedgerMember.
     * @param {LedgerMemberUpdateArgs} args - Arguments to update one LedgerMember.
     * @example
     * // Update one LedgerMember
     * const ledgerMember = await prisma.ledgerMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerMemberUpdateArgs>(args: SelectSubset<T, LedgerMemberUpdateArgs<ExtArgs>>): Prisma__LedgerMemberClient<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LedgerMembers.
     * @param {LedgerMemberDeleteManyArgs} args - Arguments to filter LedgerMembers to delete.
     * @example
     * // Delete a few LedgerMembers
     * const { count } = await prisma.ledgerMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerMemberDeleteManyArgs>(args?: SelectSubset<T, LedgerMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerMembers
     * const ledgerMember = await prisma.ledgerMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerMemberUpdateManyArgs>(args: SelectSubset<T, LedgerMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerMembers and returns the data updated in the database.
     * @param {LedgerMemberUpdateManyAndReturnArgs} args - Arguments to update many LedgerMembers.
     * @example
     * // Update many LedgerMembers
     * const ledgerMember = await prisma.ledgerMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LedgerMembers and only return the `id`
     * const ledgerMemberWithIdOnly = await prisma.ledgerMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LedgerMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, LedgerMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LedgerMember.
     * @param {LedgerMemberUpsertArgs} args - Arguments to update or create a LedgerMember.
     * @example
     * // Update or create a LedgerMember
     * const ledgerMember = await prisma.ledgerMember.upsert({
     *   create: {
     *     // ... data to create a LedgerMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerMember we want to update
     *   }
     * })
     */
    upsert<T extends LedgerMemberUpsertArgs>(args: SelectSubset<T, LedgerMemberUpsertArgs<ExtArgs>>): Prisma__LedgerMemberClient<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LedgerMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerMemberCountArgs} args - Arguments to filter LedgerMembers to count.
     * @example
     * // Count the number of LedgerMembers
     * const count = await prisma.ledgerMember.count({
     *   where: {
     *     // ... the filter for the LedgerMembers we want to count
     *   }
     * })
    **/
    count<T extends LedgerMemberCountArgs>(
      args?: Subset<T, LedgerMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LedgerMemberAggregateArgs>(args: Subset<T, LedgerMemberAggregateArgs>): Prisma.PrismaPromise<GetLedgerMemberAggregateType<T>>

    /**
     * Group by LedgerMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LedgerMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerMemberGroupByArgs['orderBy'] }
        : { orderBy?: LedgerMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LedgerMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerMember model
   */
  readonly fields: LedgerMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ledger<T extends LedgerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LedgerDefaultArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paidExpenses<T extends LedgerMember$paidExpensesArgs<ExtArgs> = {}>(args?: Subset<T, LedgerMember$paidExpensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shares<T extends LedgerMember$sharesArgs<ExtArgs> = {}>(args?: Subset<T, LedgerMember$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LedgerMember model
   */
  interface LedgerMemberFieldRefs {
    readonly id: FieldRef<"LedgerMember", 'String'>
    readonly ledgerId: FieldRef<"LedgerMember", 'String'>
    readonly clerkUserId: FieldRef<"LedgerMember", 'String'>
    readonly role: FieldRef<"LedgerMember", 'MemberRole'>
    readonly createdAt: FieldRef<"LedgerMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LedgerMember findUnique
   */
  export type LedgerMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberInclude<ExtArgs> | null
    /**
     * Filter, which LedgerMember to fetch.
     */
    where: LedgerMemberWhereUniqueInput
  }

  /**
   * LedgerMember findUniqueOrThrow
   */
  export type LedgerMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberInclude<ExtArgs> | null
    /**
     * Filter, which LedgerMember to fetch.
     */
    where: LedgerMemberWhereUniqueInput
  }

  /**
   * LedgerMember findFirst
   */
  export type LedgerMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberInclude<ExtArgs> | null
    /**
     * Filter, which LedgerMember to fetch.
     */
    where?: LedgerMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerMembers to fetch.
     */
    orderBy?: LedgerMemberOrderByWithRelationInput | LedgerMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerMembers.
     */
    cursor?: LedgerMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerMembers.
     */
    distinct?: LedgerMemberScalarFieldEnum | LedgerMemberScalarFieldEnum[]
  }

  /**
   * LedgerMember findFirstOrThrow
   */
  export type LedgerMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberInclude<ExtArgs> | null
    /**
     * Filter, which LedgerMember to fetch.
     */
    where?: LedgerMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerMembers to fetch.
     */
    orderBy?: LedgerMemberOrderByWithRelationInput | LedgerMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerMembers.
     */
    cursor?: LedgerMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerMembers.
     */
    distinct?: LedgerMemberScalarFieldEnum | LedgerMemberScalarFieldEnum[]
  }

  /**
   * LedgerMember findMany
   */
  export type LedgerMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberInclude<ExtArgs> | null
    /**
     * Filter, which LedgerMembers to fetch.
     */
    where?: LedgerMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerMembers to fetch.
     */
    orderBy?: LedgerMemberOrderByWithRelationInput | LedgerMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerMembers.
     */
    cursor?: LedgerMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerMembers.
     */
    distinct?: LedgerMemberScalarFieldEnum | LedgerMemberScalarFieldEnum[]
  }

  /**
   * LedgerMember create
   */
  export type LedgerMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a LedgerMember.
     */
    data: XOR<LedgerMemberCreateInput, LedgerMemberUncheckedCreateInput>
  }

  /**
   * LedgerMember createMany
   */
  export type LedgerMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerMembers.
     */
    data: LedgerMemberCreateManyInput | LedgerMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LedgerMember createManyAndReturn
   */
  export type LedgerMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * The data used to create many LedgerMembers.
     */
    data: LedgerMemberCreateManyInput | LedgerMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerMember update
   */
  export type LedgerMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a LedgerMember.
     */
    data: XOR<LedgerMemberUpdateInput, LedgerMemberUncheckedUpdateInput>
    /**
     * Choose, which LedgerMember to update.
     */
    where: LedgerMemberWhereUniqueInput
  }

  /**
   * LedgerMember updateMany
   */
  export type LedgerMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerMembers.
     */
    data: XOR<LedgerMemberUpdateManyMutationInput, LedgerMemberUncheckedUpdateManyInput>
    /**
     * Filter which LedgerMembers to update
     */
    where?: LedgerMemberWhereInput
    /**
     * Limit how many LedgerMembers to update.
     */
    limit?: number
  }

  /**
   * LedgerMember updateManyAndReturn
   */
  export type LedgerMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * The data used to update LedgerMembers.
     */
    data: XOR<LedgerMemberUpdateManyMutationInput, LedgerMemberUncheckedUpdateManyInput>
    /**
     * Filter which LedgerMembers to update
     */
    where?: LedgerMemberWhereInput
    /**
     * Limit how many LedgerMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerMember upsert
   */
  export type LedgerMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the LedgerMember to update in case it exists.
     */
    where: LedgerMemberWhereUniqueInput
    /**
     * In case the LedgerMember found by the `where` argument doesn't exist, create a new LedgerMember with this data.
     */
    create: XOR<LedgerMemberCreateInput, LedgerMemberUncheckedCreateInput>
    /**
     * In case the LedgerMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerMemberUpdateInput, LedgerMemberUncheckedUpdateInput>
  }

  /**
   * LedgerMember delete
   */
  export type LedgerMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberInclude<ExtArgs> | null
    /**
     * Filter which LedgerMember to delete.
     */
    where: LedgerMemberWhereUniqueInput
  }

  /**
   * LedgerMember deleteMany
   */
  export type LedgerMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerMembers to delete
     */
    where?: LedgerMemberWhereInput
    /**
     * Limit how many LedgerMembers to delete.
     */
    limit?: number
  }

  /**
   * LedgerMember.paidExpenses
   */
  export type LedgerMember$paidExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * LedgerMember.shares
   */
  export type LedgerMember$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
    where?: ExpenseShareWhereInput
    orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
    cursor?: ExpenseShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseShareScalarFieldEnum | ExpenseShareScalarFieldEnum[]
  }

  /**
   * LedgerMember without action
   */
  export type LedgerMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerMember
     */
    select?: LedgerMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerMember
     */
    omit?: LedgerMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerMemberInclude<ExtArgs> | null
  }


  /**
   * Model LedgerInvite
   */

  export type AggregateLedgerInvite = {
    _count: LedgerInviteCountAggregateOutputType | null
    _min: LedgerInviteMinAggregateOutputType | null
    _max: LedgerInviteMaxAggregateOutputType | null
  }

  export type LedgerInviteMinAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
    createdByClerkUserId: string | null
  }

  export type LedgerInviteMaxAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
    createdByClerkUserId: string | null
  }

  export type LedgerInviteCountAggregateOutputType = {
    id: number
    ledgerId: number
    tokenHash: number
    expiresAt: number
    revokedAt: number
    createdAt: number
    createdByClerkUserId: number
    _all: number
  }


  export type LedgerInviteMinAggregateInputType = {
    id?: true
    ledgerId?: true
    tokenHash?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
    createdByClerkUserId?: true
  }

  export type LedgerInviteMaxAggregateInputType = {
    id?: true
    ledgerId?: true
    tokenHash?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
    createdByClerkUserId?: true
  }

  export type LedgerInviteCountAggregateInputType = {
    id?: true
    ledgerId?: true
    tokenHash?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
    createdByClerkUserId?: true
    _all?: true
  }

  export type LedgerInviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerInvite to aggregate.
     */
    where?: LedgerInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerInvites to fetch.
     */
    orderBy?: LedgerInviteOrderByWithRelationInput | LedgerInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerInvites
    **/
    _count?: true | LedgerInviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerInviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerInviteMaxAggregateInputType
  }

  export type GetLedgerInviteAggregateType<T extends LedgerInviteAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerInvite[P]>
      : GetScalarType<T[P], AggregateLedgerInvite[P]>
  }




  export type LedgerInviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerInviteWhereInput
    orderBy?: LedgerInviteOrderByWithAggregationInput | LedgerInviteOrderByWithAggregationInput[]
    by: LedgerInviteScalarFieldEnum[] | LedgerInviteScalarFieldEnum
    having?: LedgerInviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerInviteCountAggregateInputType | true
    _min?: LedgerInviteMinAggregateInputType
    _max?: LedgerInviteMaxAggregateInputType
  }

  export type LedgerInviteGroupByOutputType = {
    id: string
    ledgerId: string
    tokenHash: string
    expiresAt: Date
    revokedAt: Date | null
    createdAt: Date
    createdByClerkUserId: string
    _count: LedgerInviteCountAggregateOutputType | null
    _min: LedgerInviteMinAggregateOutputType | null
    _max: LedgerInviteMaxAggregateOutputType | null
  }

  type GetLedgerInviteGroupByPayload<T extends LedgerInviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerInviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerInviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerInviteGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerInviteGroupByOutputType[P]>
        }
      >
    >


  export type LedgerInviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    createdByClerkUserId?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerInvite"]>

  export type LedgerInviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    createdByClerkUserId?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerInvite"]>

  export type LedgerInviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    createdByClerkUserId?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerInvite"]>

  export type LedgerInviteSelectScalar = {
    id?: boolean
    ledgerId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    createdByClerkUserId?: boolean
  }

  export type LedgerInviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ledgerId" | "tokenHash" | "expiresAt" | "revokedAt" | "createdAt" | "createdByClerkUserId", ExtArgs["result"]["ledgerInvite"]>
  export type LedgerInviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }
  export type LedgerInviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }
  export type LedgerInviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }

  export type $LedgerInvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerInvite"
    objects: {
      ledger: Prisma.$LedgerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ledgerId: string
      tokenHash: string
      expiresAt: Date
      revokedAt: Date | null
      createdAt: Date
      createdByClerkUserId: string
    }, ExtArgs["result"]["ledgerInvite"]>
    composites: {}
  }

  type LedgerInviteGetPayload<S extends boolean | null | undefined | LedgerInviteDefaultArgs> = $Result.GetResult<Prisma.$LedgerInvitePayload, S>

  type LedgerInviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LedgerInviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LedgerInviteCountAggregateInputType | true
    }

  export interface LedgerInviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerInvite'], meta: { name: 'LedgerInvite' } }
    /**
     * Find zero or one LedgerInvite that matches the filter.
     * @param {LedgerInviteFindUniqueArgs} args - Arguments to find a LedgerInvite
     * @example
     * // Get one LedgerInvite
     * const ledgerInvite = await prisma.ledgerInvite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerInviteFindUniqueArgs>(args: SelectSubset<T, LedgerInviteFindUniqueArgs<ExtArgs>>): Prisma__LedgerInviteClient<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LedgerInvite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LedgerInviteFindUniqueOrThrowArgs} args - Arguments to find a LedgerInvite
     * @example
     * // Get one LedgerInvite
     * const ledgerInvite = await prisma.ledgerInvite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerInviteFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerInviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerInviteClient<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerInvite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerInviteFindFirstArgs} args - Arguments to find a LedgerInvite
     * @example
     * // Get one LedgerInvite
     * const ledgerInvite = await prisma.ledgerInvite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerInviteFindFirstArgs>(args?: SelectSubset<T, LedgerInviteFindFirstArgs<ExtArgs>>): Prisma__LedgerInviteClient<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerInvite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerInviteFindFirstOrThrowArgs} args - Arguments to find a LedgerInvite
     * @example
     * // Get one LedgerInvite
     * const ledgerInvite = await prisma.ledgerInvite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerInviteFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerInviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerInviteClient<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LedgerInvites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerInviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerInvites
     * const ledgerInvites = await prisma.ledgerInvite.findMany()
     * 
     * // Get first 10 LedgerInvites
     * const ledgerInvites = await prisma.ledgerInvite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerInviteWithIdOnly = await prisma.ledgerInvite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerInviteFindManyArgs>(args?: SelectSubset<T, LedgerInviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LedgerInvite.
     * @param {LedgerInviteCreateArgs} args - Arguments to create a LedgerInvite.
     * @example
     * // Create one LedgerInvite
     * const LedgerInvite = await prisma.ledgerInvite.create({
     *   data: {
     *     // ... data to create a LedgerInvite
     *   }
     * })
     * 
     */
    create<T extends LedgerInviteCreateArgs>(args: SelectSubset<T, LedgerInviteCreateArgs<ExtArgs>>): Prisma__LedgerInviteClient<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LedgerInvites.
     * @param {LedgerInviteCreateManyArgs} args - Arguments to create many LedgerInvites.
     * @example
     * // Create many LedgerInvites
     * const ledgerInvite = await prisma.ledgerInvite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerInviteCreateManyArgs>(args?: SelectSubset<T, LedgerInviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerInvites and returns the data saved in the database.
     * @param {LedgerInviteCreateManyAndReturnArgs} args - Arguments to create many LedgerInvites.
     * @example
     * // Create many LedgerInvites
     * const ledgerInvite = await prisma.ledgerInvite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerInvites and only return the `id`
     * const ledgerInviteWithIdOnly = await prisma.ledgerInvite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerInviteCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerInviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LedgerInvite.
     * @param {LedgerInviteDeleteArgs} args - Arguments to delete one LedgerInvite.
     * @example
     * // Delete one LedgerInvite
     * const LedgerInvite = await prisma.ledgerInvite.delete({
     *   where: {
     *     // ... filter to delete one LedgerInvite
     *   }
     * })
     * 
     */
    delete<T extends LedgerInviteDeleteArgs>(args: SelectSubset<T, LedgerInviteDeleteArgs<ExtArgs>>): Prisma__LedgerInviteClient<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LedgerInvite.
     * @param {LedgerInviteUpdateArgs} args - Arguments to update one LedgerInvite.
     * @example
     * // Update one LedgerInvite
     * const ledgerInvite = await prisma.ledgerInvite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerInviteUpdateArgs>(args: SelectSubset<T, LedgerInviteUpdateArgs<ExtArgs>>): Prisma__LedgerInviteClient<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LedgerInvites.
     * @param {LedgerInviteDeleteManyArgs} args - Arguments to filter LedgerInvites to delete.
     * @example
     * // Delete a few LedgerInvites
     * const { count } = await prisma.ledgerInvite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerInviteDeleteManyArgs>(args?: SelectSubset<T, LedgerInviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerInviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerInvites
     * const ledgerInvite = await prisma.ledgerInvite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerInviteUpdateManyArgs>(args: SelectSubset<T, LedgerInviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerInvites and returns the data updated in the database.
     * @param {LedgerInviteUpdateManyAndReturnArgs} args - Arguments to update many LedgerInvites.
     * @example
     * // Update many LedgerInvites
     * const ledgerInvite = await prisma.ledgerInvite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LedgerInvites and only return the `id`
     * const ledgerInviteWithIdOnly = await prisma.ledgerInvite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LedgerInviteUpdateManyAndReturnArgs>(args: SelectSubset<T, LedgerInviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LedgerInvite.
     * @param {LedgerInviteUpsertArgs} args - Arguments to update or create a LedgerInvite.
     * @example
     * // Update or create a LedgerInvite
     * const ledgerInvite = await prisma.ledgerInvite.upsert({
     *   create: {
     *     // ... data to create a LedgerInvite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerInvite we want to update
     *   }
     * })
     */
    upsert<T extends LedgerInviteUpsertArgs>(args: SelectSubset<T, LedgerInviteUpsertArgs<ExtArgs>>): Prisma__LedgerInviteClient<$Result.GetResult<Prisma.$LedgerInvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LedgerInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerInviteCountArgs} args - Arguments to filter LedgerInvites to count.
     * @example
     * // Count the number of LedgerInvites
     * const count = await prisma.ledgerInvite.count({
     *   where: {
     *     // ... the filter for the LedgerInvites we want to count
     *   }
     * })
    **/
    count<T extends LedgerInviteCountArgs>(
      args?: Subset<T, LedgerInviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerInviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerInviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LedgerInviteAggregateArgs>(args: Subset<T, LedgerInviteAggregateArgs>): Prisma.PrismaPromise<GetLedgerInviteAggregateType<T>>

    /**
     * Group by LedgerInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerInviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LedgerInviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerInviteGroupByArgs['orderBy'] }
        : { orderBy?: LedgerInviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LedgerInviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerInvite model
   */
  readonly fields: LedgerInviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerInvite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerInviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ledger<T extends LedgerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LedgerDefaultArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LedgerInvite model
   */
  interface LedgerInviteFieldRefs {
    readonly id: FieldRef<"LedgerInvite", 'String'>
    readonly ledgerId: FieldRef<"LedgerInvite", 'String'>
    readonly tokenHash: FieldRef<"LedgerInvite", 'String'>
    readonly expiresAt: FieldRef<"LedgerInvite", 'DateTime'>
    readonly revokedAt: FieldRef<"LedgerInvite", 'DateTime'>
    readonly createdAt: FieldRef<"LedgerInvite", 'DateTime'>
    readonly createdByClerkUserId: FieldRef<"LedgerInvite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LedgerInvite findUnique
   */
  export type LedgerInviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteInclude<ExtArgs> | null
    /**
     * Filter, which LedgerInvite to fetch.
     */
    where: LedgerInviteWhereUniqueInput
  }

  /**
   * LedgerInvite findUniqueOrThrow
   */
  export type LedgerInviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteInclude<ExtArgs> | null
    /**
     * Filter, which LedgerInvite to fetch.
     */
    where: LedgerInviteWhereUniqueInput
  }

  /**
   * LedgerInvite findFirst
   */
  export type LedgerInviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteInclude<ExtArgs> | null
    /**
     * Filter, which LedgerInvite to fetch.
     */
    where?: LedgerInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerInvites to fetch.
     */
    orderBy?: LedgerInviteOrderByWithRelationInput | LedgerInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerInvites.
     */
    cursor?: LedgerInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerInvites.
     */
    distinct?: LedgerInviteScalarFieldEnum | LedgerInviteScalarFieldEnum[]
  }

  /**
   * LedgerInvite findFirstOrThrow
   */
  export type LedgerInviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteInclude<ExtArgs> | null
    /**
     * Filter, which LedgerInvite to fetch.
     */
    where?: LedgerInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerInvites to fetch.
     */
    orderBy?: LedgerInviteOrderByWithRelationInput | LedgerInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerInvites.
     */
    cursor?: LedgerInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerInvites.
     */
    distinct?: LedgerInviteScalarFieldEnum | LedgerInviteScalarFieldEnum[]
  }

  /**
   * LedgerInvite findMany
   */
  export type LedgerInviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteInclude<ExtArgs> | null
    /**
     * Filter, which LedgerInvites to fetch.
     */
    where?: LedgerInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerInvites to fetch.
     */
    orderBy?: LedgerInviteOrderByWithRelationInput | LedgerInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerInvites.
     */
    cursor?: LedgerInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerInvites.
     */
    distinct?: LedgerInviteScalarFieldEnum | LedgerInviteScalarFieldEnum[]
  }

  /**
   * LedgerInvite create
   */
  export type LedgerInviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteInclude<ExtArgs> | null
    /**
     * The data needed to create a LedgerInvite.
     */
    data: XOR<LedgerInviteCreateInput, LedgerInviteUncheckedCreateInput>
  }

  /**
   * LedgerInvite createMany
   */
  export type LedgerInviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerInvites.
     */
    data: LedgerInviteCreateManyInput | LedgerInviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LedgerInvite createManyAndReturn
   */
  export type LedgerInviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * The data used to create many LedgerInvites.
     */
    data: LedgerInviteCreateManyInput | LedgerInviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerInvite update
   */
  export type LedgerInviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteInclude<ExtArgs> | null
    /**
     * The data needed to update a LedgerInvite.
     */
    data: XOR<LedgerInviteUpdateInput, LedgerInviteUncheckedUpdateInput>
    /**
     * Choose, which LedgerInvite to update.
     */
    where: LedgerInviteWhereUniqueInput
  }

  /**
   * LedgerInvite updateMany
   */
  export type LedgerInviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerInvites.
     */
    data: XOR<LedgerInviteUpdateManyMutationInput, LedgerInviteUncheckedUpdateManyInput>
    /**
     * Filter which LedgerInvites to update
     */
    where?: LedgerInviteWhereInput
    /**
     * Limit how many LedgerInvites to update.
     */
    limit?: number
  }

  /**
   * LedgerInvite updateManyAndReturn
   */
  export type LedgerInviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * The data used to update LedgerInvites.
     */
    data: XOR<LedgerInviteUpdateManyMutationInput, LedgerInviteUncheckedUpdateManyInput>
    /**
     * Filter which LedgerInvites to update
     */
    where?: LedgerInviteWhereInput
    /**
     * Limit how many LedgerInvites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerInvite upsert
   */
  export type LedgerInviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteInclude<ExtArgs> | null
    /**
     * The filter to search for the LedgerInvite to update in case it exists.
     */
    where: LedgerInviteWhereUniqueInput
    /**
     * In case the LedgerInvite found by the `where` argument doesn't exist, create a new LedgerInvite with this data.
     */
    create: XOR<LedgerInviteCreateInput, LedgerInviteUncheckedCreateInput>
    /**
     * In case the LedgerInvite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerInviteUpdateInput, LedgerInviteUncheckedUpdateInput>
  }

  /**
   * LedgerInvite delete
   */
  export type LedgerInviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteInclude<ExtArgs> | null
    /**
     * Filter which LedgerInvite to delete.
     */
    where: LedgerInviteWhereUniqueInput
  }

  /**
   * LedgerInvite deleteMany
   */
  export type LedgerInviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerInvites to delete
     */
    where?: LedgerInviteWhereInput
    /**
     * Limit how many LedgerInvites to delete.
     */
    limit?: number
  }

  /**
   * LedgerInvite without action
   */
  export type LedgerInviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerInvite
     */
    select?: LedgerInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerInvite
     */
    omit?: LedgerInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInviteInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amountMinor: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    amountMinor: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    payerMemberId: string | null
    createdByClerkUserId: string | null
    amountMinor: number | null
    description: string | null
    category: $Enums.ExpenseCategory | null
    proofUrl: string | null
    splitType: $Enums.SplitType | null
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    payerMemberId: string | null
    createdByClerkUserId: string | null
    amountMinor: number | null
    description: string | null
    category: $Enums.ExpenseCategory | null
    proofUrl: string | null
    splitType: $Enums.SplitType | null
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    ledgerId: number
    payerMemberId: number
    createdByClerkUserId: number
    amountMinor: number
    description: number
    category: number
    proofUrl: number
    splitType: number
    idempotencyKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amountMinor?: true
  }

  export type ExpenseSumAggregateInputType = {
    amountMinor?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    ledgerId?: true
    payerMemberId?: true
    createdByClerkUserId?: true
    amountMinor?: true
    description?: true
    category?: true
    proofUrl?: true
    splitType?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    ledgerId?: true
    payerMemberId?: true
    createdByClerkUserId?: true
    amountMinor?: true
    description?: true
    category?: true
    proofUrl?: true
    splitType?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    ledgerId?: true
    payerMemberId?: true
    createdByClerkUserId?: true
    amountMinor?: true
    description?: true
    category?: true
    proofUrl?: true
    splitType?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    ledgerId: string
    payerMemberId: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category: $Enums.ExpenseCategory | null
    proofUrl: string | null
    splitType: $Enums.SplitType
    idempotencyKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    payerMemberId?: boolean
    createdByClerkUserId?: boolean
    amountMinor?: boolean
    description?: boolean
    category?: boolean
    proofUrl?: boolean
    splitType?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
    payer?: boolean | LedgerMemberDefaultArgs<ExtArgs>
    shares?: boolean | Expense$sharesArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    payerMemberId?: boolean
    createdByClerkUserId?: boolean
    amountMinor?: boolean
    description?: boolean
    category?: boolean
    proofUrl?: boolean
    splitType?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
    payer?: boolean | LedgerMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    payerMemberId?: boolean
    createdByClerkUserId?: boolean
    amountMinor?: boolean
    description?: boolean
    category?: boolean
    proofUrl?: boolean
    splitType?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
    payer?: boolean | LedgerMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    ledgerId?: boolean
    payerMemberId?: boolean
    createdByClerkUserId?: boolean
    amountMinor?: boolean
    description?: boolean
    category?: boolean
    proofUrl?: boolean
    splitType?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ledgerId" | "payerMemberId" | "createdByClerkUserId" | "amountMinor" | "description" | "category" | "proofUrl" | "splitType" | "idempotencyKey" | "createdAt" | "updatedAt", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
    payer?: boolean | LedgerMemberDefaultArgs<ExtArgs>
    shares?: boolean | Expense$sharesArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
    payer?: boolean | LedgerMemberDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
    payer?: boolean | LedgerMemberDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      ledger: Prisma.$LedgerPayload<ExtArgs>
      payer: Prisma.$LedgerMemberPayload<ExtArgs>
      shares: Prisma.$ExpenseSharePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ledgerId: string
      payerMemberId: string
      createdByClerkUserId: string
      amountMinor: number
      description: string
      category: $Enums.ExpenseCategory | null
      proofUrl: string | null
      splitType: $Enums.SplitType
      idempotencyKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ledger<T extends LedgerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LedgerDefaultArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payer<T extends LedgerMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LedgerMemberDefaultArgs<ExtArgs>>): Prisma__LedgerMemberClient<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shares<T extends Expense$sharesArgs<ExtArgs> = {}>(args?: Subset<T, Expense$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly ledgerId: FieldRef<"Expense", 'String'>
    readonly payerMemberId: FieldRef<"Expense", 'String'>
    readonly createdByClerkUserId: FieldRef<"Expense", 'String'>
    readonly amountMinor: FieldRef<"Expense", 'Int'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly category: FieldRef<"Expense", 'ExpenseCategory'>
    readonly proofUrl: FieldRef<"Expense", 'String'>
    readonly splitType: FieldRef<"Expense", 'SplitType'>
    readonly idempotencyKey: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
    readonly updatedAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense.shares
   */
  export type Expense$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
    where?: ExpenseShareWhereInput
    orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
    cursor?: ExpenseShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseShareScalarFieldEnum | ExpenseShareScalarFieldEnum[]
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseShare
   */

  export type AggregateExpenseShare = {
    _count: ExpenseShareCountAggregateOutputType | null
    _avg: ExpenseShareAvgAggregateOutputType | null
    _sum: ExpenseShareSumAggregateOutputType | null
    _min: ExpenseShareMinAggregateOutputType | null
    _max: ExpenseShareMaxAggregateOutputType | null
  }

  export type ExpenseShareAvgAggregateOutputType = {
    amountMinor: number | null
  }

  export type ExpenseShareSumAggregateOutputType = {
    amountMinor: number | null
  }

  export type ExpenseShareMinAggregateOutputType = {
    id: string | null
    expenseId: string | null
    memberId: string | null
    amountMinor: number | null
    createdAt: Date | null
  }

  export type ExpenseShareMaxAggregateOutputType = {
    id: string | null
    expenseId: string | null
    memberId: string | null
    amountMinor: number | null
    createdAt: Date | null
  }

  export type ExpenseShareCountAggregateOutputType = {
    id: number
    expenseId: number
    memberId: number
    amountMinor: number
    createdAt: number
    _all: number
  }


  export type ExpenseShareAvgAggregateInputType = {
    amountMinor?: true
  }

  export type ExpenseShareSumAggregateInputType = {
    amountMinor?: true
  }

  export type ExpenseShareMinAggregateInputType = {
    id?: true
    expenseId?: true
    memberId?: true
    amountMinor?: true
    createdAt?: true
  }

  export type ExpenseShareMaxAggregateInputType = {
    id?: true
    expenseId?: true
    memberId?: true
    amountMinor?: true
    createdAt?: true
  }

  export type ExpenseShareCountAggregateInputType = {
    id?: true
    expenseId?: true
    memberId?: true
    amountMinor?: true
    createdAt?: true
    _all?: true
  }

  export type ExpenseShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseShare to aggregate.
     */
    where?: ExpenseShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseShares to fetch.
     */
    orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseShares
    **/
    _count?: true | ExpenseShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseShareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseShareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseShareMaxAggregateInputType
  }

  export type GetExpenseShareAggregateType<T extends ExpenseShareAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseShare[P]>
      : GetScalarType<T[P], AggregateExpenseShare[P]>
  }




  export type ExpenseShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseShareWhereInput
    orderBy?: ExpenseShareOrderByWithAggregationInput | ExpenseShareOrderByWithAggregationInput[]
    by: ExpenseShareScalarFieldEnum[] | ExpenseShareScalarFieldEnum
    having?: ExpenseShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseShareCountAggregateInputType | true
    _avg?: ExpenseShareAvgAggregateInputType
    _sum?: ExpenseShareSumAggregateInputType
    _min?: ExpenseShareMinAggregateInputType
    _max?: ExpenseShareMaxAggregateInputType
  }

  export type ExpenseShareGroupByOutputType = {
    id: string
    expenseId: string
    memberId: string
    amountMinor: number
    createdAt: Date
    _count: ExpenseShareCountAggregateOutputType | null
    _avg: ExpenseShareAvgAggregateOutputType | null
    _sum: ExpenseShareSumAggregateOutputType | null
    _min: ExpenseShareMinAggregateOutputType | null
    _max: ExpenseShareMaxAggregateOutputType | null
  }

  type GetExpenseShareGroupByPayload<T extends ExpenseShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseShareGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseShareGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    memberId?: boolean
    amountMinor?: boolean
    createdAt?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    member?: boolean | LedgerMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseShare"]>

  export type ExpenseShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    memberId?: boolean
    amountMinor?: boolean
    createdAt?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    member?: boolean | LedgerMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseShare"]>

  export type ExpenseShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    memberId?: boolean
    amountMinor?: boolean
    createdAt?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    member?: boolean | LedgerMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseShare"]>

  export type ExpenseShareSelectScalar = {
    id?: boolean
    expenseId?: boolean
    memberId?: boolean
    amountMinor?: boolean
    createdAt?: boolean
  }

  export type ExpenseShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expenseId" | "memberId" | "amountMinor" | "createdAt", ExtArgs["result"]["expenseShare"]>
  export type ExpenseShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    member?: boolean | LedgerMemberDefaultArgs<ExtArgs>
  }
  export type ExpenseShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    member?: boolean | LedgerMemberDefaultArgs<ExtArgs>
  }
  export type ExpenseShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    member?: boolean | LedgerMemberDefaultArgs<ExtArgs>
  }

  export type $ExpenseSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseShare"
    objects: {
      expense: Prisma.$ExpensePayload<ExtArgs>
      member: Prisma.$LedgerMemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expenseId: string
      memberId: string
      amountMinor: number
      createdAt: Date
    }, ExtArgs["result"]["expenseShare"]>
    composites: {}
  }

  type ExpenseShareGetPayload<S extends boolean | null | undefined | ExpenseShareDefaultArgs> = $Result.GetResult<Prisma.$ExpenseSharePayload, S>

  type ExpenseShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseShareCountAggregateInputType | true
    }

  export interface ExpenseShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseShare'], meta: { name: 'ExpenseShare' } }
    /**
     * Find zero or one ExpenseShare that matches the filter.
     * @param {ExpenseShareFindUniqueArgs} args - Arguments to find a ExpenseShare
     * @example
     * // Get one ExpenseShare
     * const expenseShare = await prisma.expenseShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseShareFindUniqueArgs>(args: SelectSubset<T, ExpenseShareFindUniqueArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseShareFindUniqueOrThrowArgs} args - Arguments to find a ExpenseShare
     * @example
     * // Get one ExpenseShare
     * const expenseShare = await prisma.expenseShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseShareFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseShareFindFirstArgs} args - Arguments to find a ExpenseShare
     * @example
     * // Get one ExpenseShare
     * const expenseShare = await prisma.expenseShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseShareFindFirstArgs>(args?: SelectSubset<T, ExpenseShareFindFirstArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseShareFindFirstOrThrowArgs} args - Arguments to find a ExpenseShare
     * @example
     * // Get one ExpenseShare
     * const expenseShare = await prisma.expenseShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseShareFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseShares
     * const expenseShares = await prisma.expenseShare.findMany()
     * 
     * // Get first 10 ExpenseShares
     * const expenseShares = await prisma.expenseShare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseShareWithIdOnly = await prisma.expenseShare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseShareFindManyArgs>(args?: SelectSubset<T, ExpenseShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseShare.
     * @param {ExpenseShareCreateArgs} args - Arguments to create a ExpenseShare.
     * @example
     * // Create one ExpenseShare
     * const ExpenseShare = await prisma.expenseShare.create({
     *   data: {
     *     // ... data to create a ExpenseShare
     *   }
     * })
     * 
     */
    create<T extends ExpenseShareCreateArgs>(args: SelectSubset<T, ExpenseShareCreateArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseShares.
     * @param {ExpenseShareCreateManyArgs} args - Arguments to create many ExpenseShares.
     * @example
     * // Create many ExpenseShares
     * const expenseShare = await prisma.expenseShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseShareCreateManyArgs>(args?: SelectSubset<T, ExpenseShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseShares and returns the data saved in the database.
     * @param {ExpenseShareCreateManyAndReturnArgs} args - Arguments to create many ExpenseShares.
     * @example
     * // Create many ExpenseShares
     * const expenseShare = await prisma.expenseShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseShares and only return the `id`
     * const expenseShareWithIdOnly = await prisma.expenseShare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseShareCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseShare.
     * @param {ExpenseShareDeleteArgs} args - Arguments to delete one ExpenseShare.
     * @example
     * // Delete one ExpenseShare
     * const ExpenseShare = await prisma.expenseShare.delete({
     *   where: {
     *     // ... filter to delete one ExpenseShare
     *   }
     * })
     * 
     */
    delete<T extends ExpenseShareDeleteArgs>(args: SelectSubset<T, ExpenseShareDeleteArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseShare.
     * @param {ExpenseShareUpdateArgs} args - Arguments to update one ExpenseShare.
     * @example
     * // Update one ExpenseShare
     * const expenseShare = await prisma.expenseShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseShareUpdateArgs>(args: SelectSubset<T, ExpenseShareUpdateArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseShares.
     * @param {ExpenseShareDeleteManyArgs} args - Arguments to filter ExpenseShares to delete.
     * @example
     * // Delete a few ExpenseShares
     * const { count } = await prisma.expenseShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseShareDeleteManyArgs>(args?: SelectSubset<T, ExpenseShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseShares
     * const expenseShare = await prisma.expenseShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseShareUpdateManyArgs>(args: SelectSubset<T, ExpenseShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseShares and returns the data updated in the database.
     * @param {ExpenseShareUpdateManyAndReturnArgs} args - Arguments to update many ExpenseShares.
     * @example
     * // Update many ExpenseShares
     * const expenseShare = await prisma.expenseShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseShares and only return the `id`
     * const expenseShareWithIdOnly = await prisma.expenseShare.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseShareUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseShare.
     * @param {ExpenseShareUpsertArgs} args - Arguments to update or create a ExpenseShare.
     * @example
     * // Update or create a ExpenseShare
     * const expenseShare = await prisma.expenseShare.upsert({
     *   create: {
     *     // ... data to create a ExpenseShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseShare we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseShareUpsertArgs>(args: SelectSubset<T, ExpenseShareUpsertArgs<ExtArgs>>): Prisma__ExpenseShareClient<$Result.GetResult<Prisma.$ExpenseSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseShareCountArgs} args - Arguments to filter ExpenseShares to count.
     * @example
     * // Count the number of ExpenseShares
     * const count = await prisma.expenseShare.count({
     *   where: {
     *     // ... the filter for the ExpenseShares we want to count
     *   }
     * })
    **/
    count<T extends ExpenseShareCountArgs>(
      args?: Subset<T, ExpenseShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseShareAggregateArgs>(args: Subset<T, ExpenseShareAggregateArgs>): Prisma.PrismaPromise<GetExpenseShareAggregateType<T>>

    /**
     * Group by ExpenseShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseShareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseShareGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseShareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseShare model
   */
  readonly fields: ExpenseShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends ExpenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseDefaultArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends LedgerMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LedgerMemberDefaultArgs<ExtArgs>>): Prisma__LedgerMemberClient<$Result.GetResult<Prisma.$LedgerMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseShare model
   */
  interface ExpenseShareFieldRefs {
    readonly id: FieldRef<"ExpenseShare", 'String'>
    readonly expenseId: FieldRef<"ExpenseShare", 'String'>
    readonly memberId: FieldRef<"ExpenseShare", 'String'>
    readonly amountMinor: FieldRef<"ExpenseShare", 'Int'>
    readonly createdAt: FieldRef<"ExpenseShare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseShare findUnique
   */
  export type ExpenseShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseShare to fetch.
     */
    where: ExpenseShareWhereUniqueInput
  }

  /**
   * ExpenseShare findUniqueOrThrow
   */
  export type ExpenseShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseShare to fetch.
     */
    where: ExpenseShareWhereUniqueInput
  }

  /**
   * ExpenseShare findFirst
   */
  export type ExpenseShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseShare to fetch.
     */
    where?: ExpenseShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseShares to fetch.
     */
    orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseShares.
     */
    cursor?: ExpenseShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseShares.
     */
    distinct?: ExpenseShareScalarFieldEnum | ExpenseShareScalarFieldEnum[]
  }

  /**
   * ExpenseShare findFirstOrThrow
   */
  export type ExpenseShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseShare to fetch.
     */
    where?: ExpenseShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseShares to fetch.
     */
    orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseShares.
     */
    cursor?: ExpenseShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseShares.
     */
    distinct?: ExpenseShareScalarFieldEnum | ExpenseShareScalarFieldEnum[]
  }

  /**
   * ExpenseShare findMany
   */
  export type ExpenseShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseShares to fetch.
     */
    where?: ExpenseShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseShares to fetch.
     */
    orderBy?: ExpenseShareOrderByWithRelationInput | ExpenseShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseShares.
     */
    cursor?: ExpenseShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseShares.
     */
    distinct?: ExpenseShareScalarFieldEnum | ExpenseShareScalarFieldEnum[]
  }

  /**
   * ExpenseShare create
   */
  export type ExpenseShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseShare.
     */
    data: XOR<ExpenseShareCreateInput, ExpenseShareUncheckedCreateInput>
  }

  /**
   * ExpenseShare createMany
   */
  export type ExpenseShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseShares.
     */
    data: ExpenseShareCreateManyInput | ExpenseShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseShare createManyAndReturn
   */
  export type ExpenseShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseShares.
     */
    data: ExpenseShareCreateManyInput | ExpenseShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseShare update
   */
  export type ExpenseShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseShare.
     */
    data: XOR<ExpenseShareUpdateInput, ExpenseShareUncheckedUpdateInput>
    /**
     * Choose, which ExpenseShare to update.
     */
    where: ExpenseShareWhereUniqueInput
  }

  /**
   * ExpenseShare updateMany
   */
  export type ExpenseShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseShares.
     */
    data: XOR<ExpenseShareUpdateManyMutationInput, ExpenseShareUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseShares to update
     */
    where?: ExpenseShareWhereInput
    /**
     * Limit how many ExpenseShares to update.
     */
    limit?: number
  }

  /**
   * ExpenseShare updateManyAndReturn
   */
  export type ExpenseShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseShares.
     */
    data: XOR<ExpenseShareUpdateManyMutationInput, ExpenseShareUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseShares to update
     */
    where?: ExpenseShareWhereInput
    /**
     * Limit how many ExpenseShares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseShare upsert
   */
  export type ExpenseShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseShare to update in case it exists.
     */
    where: ExpenseShareWhereUniqueInput
    /**
     * In case the ExpenseShare found by the `where` argument doesn't exist, create a new ExpenseShare with this data.
     */
    create: XOR<ExpenseShareCreateInput, ExpenseShareUncheckedCreateInput>
    /**
     * In case the ExpenseShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseShareUpdateInput, ExpenseShareUncheckedUpdateInput>
  }

  /**
   * ExpenseShare delete
   */
  export type ExpenseShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
    /**
     * Filter which ExpenseShare to delete.
     */
    where: ExpenseShareWhereUniqueInput
  }

  /**
   * ExpenseShare deleteMany
   */
  export type ExpenseShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseShares to delete
     */
    where?: ExpenseShareWhereInput
    /**
     * Limit how many ExpenseShares to delete.
     */
    limit?: number
  }

  /**
   * ExpenseShare without action
   */
  export type ExpenseShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseShare
     */
    select?: ExpenseShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseShare
     */
    omit?: ExpenseShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseShareInclude<ExtArgs> | null
  }


  /**
   * Model AuditEvent
   */

  export type AggregateAuditEvent = {
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  export type AuditEventMinAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    actorClerkUserId: string | null
    eventType: $Enums.AuditEventType | null
    entityType: $Enums.AuditEntityType | null
    entityId: string | null
    occurredAt: Date | null
  }

  export type AuditEventMaxAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    actorClerkUserId: string | null
    eventType: $Enums.AuditEventType | null
    entityType: $Enums.AuditEntityType | null
    entityId: string | null
    occurredAt: Date | null
  }

  export type AuditEventCountAggregateOutputType = {
    id: number
    ledgerId: number
    actorClerkUserId: number
    eventType: number
    entityType: number
    entityId: number
    payload: number
    occurredAt: number
    _all: number
  }


  export type AuditEventMinAggregateInputType = {
    id?: true
    ledgerId?: true
    actorClerkUserId?: true
    eventType?: true
    entityType?: true
    entityId?: true
    occurredAt?: true
  }

  export type AuditEventMaxAggregateInputType = {
    id?: true
    ledgerId?: true
    actorClerkUserId?: true
    eventType?: true
    entityType?: true
    entityId?: true
    occurredAt?: true
  }

  export type AuditEventCountAggregateInputType = {
    id?: true
    ledgerId?: true
    actorClerkUserId?: true
    eventType?: true
    entityType?: true
    entityId?: true
    payload?: true
    occurredAt?: true
    _all?: true
  }

  export type AuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvent to aggregate.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditEvents
    **/
    _count?: true | AuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditEventMaxAggregateInputType
  }

  export type GetAuditEventAggregateType<T extends AuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditEvent[P]>
      : GetScalarType<T[P], AggregateAuditEvent[P]>
  }




  export type AuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithAggregationInput | AuditEventOrderByWithAggregationInput[]
    by: AuditEventScalarFieldEnum[] | AuditEventScalarFieldEnum
    having?: AuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditEventCountAggregateInputType | true
    _min?: AuditEventMinAggregateInputType
    _max?: AuditEventMaxAggregateInputType
  }

  export type AuditEventGroupByOutputType = {
    id: string
    ledgerId: string
    actorClerkUserId: string
    eventType: $Enums.AuditEventType
    entityType: $Enums.AuditEntityType
    entityId: string | null
    payload: JsonValue
    occurredAt: Date
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  type GetAuditEventGroupByPayload<T extends AuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
        }
      >
    >


  export type AuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    actorClerkUserId?: boolean
    eventType?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    occurredAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    actorClerkUserId?: boolean
    eventType?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    occurredAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    actorClerkUserId?: boolean
    eventType?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    occurredAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectScalar = {
    id?: boolean
    ledgerId?: boolean
    actorClerkUserId?: boolean
    eventType?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    occurredAt?: boolean
  }

  export type AuditEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ledgerId" | "actorClerkUserId" | "eventType" | "entityType" | "entityId" | "payload" | "occurredAt", ExtArgs["result"]["auditEvent"]>
  export type AuditEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }
  export type AuditEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }
  export type AuditEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }

  export type $AuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditEvent"
    objects: {
      ledger: Prisma.$LedgerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ledgerId: string
      actorClerkUserId: string
      eventType: $Enums.AuditEventType
      entityType: $Enums.AuditEntityType
      entityId: string | null
      payload: Prisma.JsonValue
      occurredAt: Date
    }, ExtArgs["result"]["auditEvent"]>
    composites: {}
  }

  type AuditEventGetPayload<S extends boolean | null | undefined | AuditEventDefaultArgs> = $Result.GetResult<Prisma.$AuditEventPayload, S>

  type AuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditEventCountAggregateInputType | true
    }

  export interface AuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditEvent'], meta: { name: 'AuditEvent' } }
    /**
     * Find zero or one AuditEvent that matches the filter.
     * @param {AuditEventFindUniqueArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditEventFindUniqueArgs>(args: SelectSubset<T, AuditEventFindUniqueArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditEventFindUniqueOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditEventFindFirstArgs>(args?: SelectSubset<T, AuditEventFindFirstArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany()
     * 
     * // Get first 10 AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditEventFindManyArgs>(args?: SelectSubset<T, AuditEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditEvent.
     * @param {AuditEventCreateArgs} args - Arguments to create a AuditEvent.
     * @example
     * // Create one AuditEvent
     * const AuditEvent = await prisma.auditEvent.create({
     *   data: {
     *     // ... data to create a AuditEvent
     *   }
     * })
     * 
     */
    create<T extends AuditEventCreateArgs>(args: SelectSubset<T, AuditEventCreateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditEvents.
     * @param {AuditEventCreateManyArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditEventCreateManyArgs>(args?: SelectSubset<T, AuditEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditEvents and returns the data saved in the database.
     * @param {AuditEventCreateManyAndReturnArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditEvents and only return the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditEvent.
     * @param {AuditEventDeleteArgs} args - Arguments to delete one AuditEvent.
     * @example
     * // Delete one AuditEvent
     * const AuditEvent = await prisma.auditEvent.delete({
     *   where: {
     *     // ... filter to delete one AuditEvent
     *   }
     * })
     * 
     */
    delete<T extends AuditEventDeleteArgs>(args: SelectSubset<T, AuditEventDeleteArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditEvent.
     * @param {AuditEventUpdateArgs} args - Arguments to update one AuditEvent.
     * @example
     * // Update one AuditEvent
     * const auditEvent = await prisma.auditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditEventUpdateArgs>(args: SelectSubset<T, AuditEventUpdateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditEvents.
     * @param {AuditEventDeleteManyArgs} args - Arguments to filter AuditEvents to delete.
     * @example
     * // Delete a few AuditEvents
     * const { count } = await prisma.auditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditEventDeleteManyArgs>(args?: SelectSubset<T, AuditEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditEventUpdateManyArgs>(args: SelectSubset<T, AuditEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents and returns the data updated in the database.
     * @param {AuditEventUpdateManyAndReturnArgs} args - Arguments to update many AuditEvents.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditEvents and only return the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditEvent.
     * @param {AuditEventUpsertArgs} args - Arguments to update or create a AuditEvent.
     * @example
     * // Update or create a AuditEvent
     * const auditEvent = await prisma.auditEvent.upsert({
     *   create: {
     *     // ... data to create a AuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditEvent we want to update
     *   }
     * })
     */
    upsert<T extends AuditEventUpsertArgs>(args: SelectSubset<T, AuditEventUpsertArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventCountArgs} args - Arguments to filter AuditEvents to count.
     * @example
     * // Count the number of AuditEvents
     * const count = await prisma.auditEvent.count({
     *   where: {
     *     // ... the filter for the AuditEvents we want to count
     *   }
     * })
    **/
    count<T extends AuditEventCountArgs>(
      args?: Subset<T, AuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditEventAggregateArgs>(args: Subset<T, AuditEventAggregateArgs>): Prisma.PrismaPromise<GetAuditEventAggregateType<T>>

    /**
     * Group by AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditEventGroupByArgs['orderBy'] }
        : { orderBy?: AuditEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditEvent model
   */
  readonly fields: AuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ledger<T extends LedgerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LedgerDefaultArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditEvent model
   */
  interface AuditEventFieldRefs {
    readonly id: FieldRef<"AuditEvent", 'String'>
    readonly ledgerId: FieldRef<"AuditEvent", 'String'>
    readonly actorClerkUserId: FieldRef<"AuditEvent", 'String'>
    readonly eventType: FieldRef<"AuditEvent", 'AuditEventType'>
    readonly entityType: FieldRef<"AuditEvent", 'AuditEntityType'>
    readonly entityId: FieldRef<"AuditEvent", 'String'>
    readonly payload: FieldRef<"AuditEvent", 'Json'>
    readonly occurredAt: FieldRef<"AuditEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditEvent findUnique
   */
  export type AuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findUniqueOrThrow
   */
  export type AuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findFirst
   */
  export type AuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findFirstOrThrow
   */
  export type AuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findMany
   */
  export type AuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvents to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent create
   */
  export type AuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditEvent.
     */
    data: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
  }

  /**
   * AuditEvent createMany
   */
  export type AuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditEvent createManyAndReturn
   */
  export type AuditEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditEvent update
   */
  export type AuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditEvent.
     */
    data: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
    /**
     * Choose, which AuditEvent to update.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent updateMany
   */
  export type AuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to update.
     */
    limit?: number
  }

  /**
   * AuditEvent updateManyAndReturn
   */
  export type AuditEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditEvent upsert
   */
  export type AuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditEvent to update in case it exists.
     */
    where: AuditEventWhereUniqueInput
    /**
     * In case the AuditEvent found by the `where` argument doesn't exist, create a new AuditEvent with this data.
     */
    create: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
    /**
     * In case the AuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
  }

  /**
   * AuditEvent delete
   */
  export type AuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter which AuditEvent to delete.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent deleteMany
   */
  export type AuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvents to delete
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to delete.
     */
    limit?: number
  }

  /**
   * AuditEvent without action
   */
  export type AuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
  }


  /**
   * Model Settlement
   */

  export type AggregateSettlement = {
    _count: SettlementCountAggregateOutputType | null
    _avg: SettlementAvgAggregateOutputType | null
    _sum: SettlementSumAggregateOutputType | null
    _min: SettlementMinAggregateOutputType | null
    _max: SettlementMaxAggregateOutputType | null
  }

  export type SettlementAvgAggregateOutputType = {
    totalTransferredMinor: number | null
    transactionCount: number | null
  }

  export type SettlementSumAggregateOutputType = {
    totalTransferredMinor: number | null
    transactionCount: number | null
  }

  export type SettlementMinAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    sourceBalanceFingerprint: string | null
    status: $Enums.SettlementStatus | null
    totalTransferredMinor: number | null
    transactionCount: number | null
    createdByClerkUserId: string | null
    createdAt: Date | null
    completedByClerkUserId: string | null
    completedAt: Date | null
  }

  export type SettlementMaxAggregateOutputType = {
    id: string | null
    ledgerId: string | null
    sourceBalanceFingerprint: string | null
    status: $Enums.SettlementStatus | null
    totalTransferredMinor: number | null
    transactionCount: number | null
    createdByClerkUserId: string | null
    createdAt: Date | null
    completedByClerkUserId: string | null
    completedAt: Date | null
  }

  export type SettlementCountAggregateOutputType = {
    id: number
    ledgerId: number
    sourceBalanceFingerprint: number
    status: number
    totalTransferredMinor: number
    transactionCount: number
    createdByClerkUserId: number
    createdAt: number
    completedByClerkUserId: number
    completedAt: number
    _all: number
  }


  export type SettlementAvgAggregateInputType = {
    totalTransferredMinor?: true
    transactionCount?: true
  }

  export type SettlementSumAggregateInputType = {
    totalTransferredMinor?: true
    transactionCount?: true
  }

  export type SettlementMinAggregateInputType = {
    id?: true
    ledgerId?: true
    sourceBalanceFingerprint?: true
    status?: true
    totalTransferredMinor?: true
    transactionCount?: true
    createdByClerkUserId?: true
    createdAt?: true
    completedByClerkUserId?: true
    completedAt?: true
  }

  export type SettlementMaxAggregateInputType = {
    id?: true
    ledgerId?: true
    sourceBalanceFingerprint?: true
    status?: true
    totalTransferredMinor?: true
    transactionCount?: true
    createdByClerkUserId?: true
    createdAt?: true
    completedByClerkUserId?: true
    completedAt?: true
  }

  export type SettlementCountAggregateInputType = {
    id?: true
    ledgerId?: true
    sourceBalanceFingerprint?: true
    status?: true
    totalTransferredMinor?: true
    transactionCount?: true
    createdByClerkUserId?: true
    createdAt?: true
    completedByClerkUserId?: true
    completedAt?: true
    _all?: true
  }

  export type SettlementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settlement to aggregate.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settlements
    **/
    _count?: true | SettlementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettlementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettlementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettlementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettlementMaxAggregateInputType
  }

  export type GetSettlementAggregateType<T extends SettlementAggregateArgs> = {
        [P in keyof T & keyof AggregateSettlement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettlement[P]>
      : GetScalarType<T[P], AggregateSettlement[P]>
  }




  export type SettlementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementWhereInput
    orderBy?: SettlementOrderByWithAggregationInput | SettlementOrderByWithAggregationInput[]
    by: SettlementScalarFieldEnum[] | SettlementScalarFieldEnum
    having?: SettlementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettlementCountAggregateInputType | true
    _avg?: SettlementAvgAggregateInputType
    _sum?: SettlementSumAggregateInputType
    _min?: SettlementMinAggregateInputType
    _max?: SettlementMaxAggregateInputType
  }

  export type SettlementGroupByOutputType = {
    id: string
    ledgerId: string
    sourceBalanceFingerprint: string
    status: $Enums.SettlementStatus
    totalTransferredMinor: number
    transactionCount: number
    createdByClerkUserId: string
    createdAt: Date
    completedByClerkUserId: string | null
    completedAt: Date | null
    _count: SettlementCountAggregateOutputType | null
    _avg: SettlementAvgAggregateOutputType | null
    _sum: SettlementSumAggregateOutputType | null
    _min: SettlementMinAggregateOutputType | null
    _max: SettlementMaxAggregateOutputType | null
  }

  type GetSettlementGroupByPayload<T extends SettlementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettlementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettlementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettlementGroupByOutputType[P]>
            : GetScalarType<T[P], SettlementGroupByOutputType[P]>
        }
      >
    >


  export type SettlementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    sourceBalanceFingerprint?: boolean
    status?: boolean
    totalTransferredMinor?: boolean
    transactionCount?: boolean
    createdByClerkUserId?: boolean
    createdAt?: boolean
    completedByClerkUserId?: boolean
    completedAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
    transfers?: boolean | Settlement$transfersArgs<ExtArgs>
    _count?: boolean | SettlementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    sourceBalanceFingerprint?: boolean
    status?: boolean
    totalTransferredMinor?: boolean
    transactionCount?: boolean
    createdByClerkUserId?: boolean
    createdAt?: boolean
    completedByClerkUserId?: boolean
    completedAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ledgerId?: boolean
    sourceBalanceFingerprint?: boolean
    status?: boolean
    totalTransferredMinor?: boolean
    transactionCount?: boolean
    createdByClerkUserId?: boolean
    createdAt?: boolean
    completedByClerkUserId?: boolean
    completedAt?: boolean
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlement"]>

  export type SettlementSelectScalar = {
    id?: boolean
    ledgerId?: boolean
    sourceBalanceFingerprint?: boolean
    status?: boolean
    totalTransferredMinor?: boolean
    transactionCount?: boolean
    createdByClerkUserId?: boolean
    createdAt?: boolean
    completedByClerkUserId?: boolean
    completedAt?: boolean
  }

  export type SettlementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ledgerId" | "sourceBalanceFingerprint" | "status" | "totalTransferredMinor" | "transactionCount" | "createdByClerkUserId" | "createdAt" | "completedByClerkUserId" | "completedAt", ExtArgs["result"]["settlement"]>
  export type SettlementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
    transfers?: boolean | Settlement$transfersArgs<ExtArgs>
    _count?: boolean | SettlementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SettlementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }
  export type SettlementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledger?: boolean | LedgerDefaultArgs<ExtArgs>
  }

  export type $SettlementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settlement"
    objects: {
      ledger: Prisma.$LedgerPayload<ExtArgs>
      transfers: Prisma.$SettlementTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ledgerId: string
      sourceBalanceFingerprint: string
      status: $Enums.SettlementStatus
      totalTransferredMinor: number
      transactionCount: number
      createdByClerkUserId: string
      createdAt: Date
      completedByClerkUserId: string | null
      completedAt: Date | null
    }, ExtArgs["result"]["settlement"]>
    composites: {}
  }

  type SettlementGetPayload<S extends boolean | null | undefined | SettlementDefaultArgs> = $Result.GetResult<Prisma.$SettlementPayload, S>

  type SettlementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettlementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettlementCountAggregateInputType | true
    }

  export interface SettlementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settlement'], meta: { name: 'Settlement' } }
    /**
     * Find zero or one Settlement that matches the filter.
     * @param {SettlementFindUniqueArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettlementFindUniqueArgs>(args: SelectSubset<T, SettlementFindUniqueArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settlement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettlementFindUniqueOrThrowArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettlementFindUniqueOrThrowArgs>(args: SelectSubset<T, SettlementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settlement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindFirstArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettlementFindFirstArgs>(args?: SelectSubset<T, SettlementFindFirstArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settlement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindFirstOrThrowArgs} args - Arguments to find a Settlement
     * @example
     * // Get one Settlement
     * const settlement = await prisma.settlement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettlementFindFirstOrThrowArgs>(args?: SelectSubset<T, SettlementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settlements
     * const settlements = await prisma.settlement.findMany()
     * 
     * // Get first 10 Settlements
     * const settlements = await prisma.settlement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settlementWithIdOnly = await prisma.settlement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettlementFindManyArgs>(args?: SelectSubset<T, SettlementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settlement.
     * @param {SettlementCreateArgs} args - Arguments to create a Settlement.
     * @example
     * // Create one Settlement
     * const Settlement = await prisma.settlement.create({
     *   data: {
     *     // ... data to create a Settlement
     *   }
     * })
     * 
     */
    create<T extends SettlementCreateArgs>(args: SelectSubset<T, SettlementCreateArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settlements.
     * @param {SettlementCreateManyArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlement = await prisma.settlement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettlementCreateManyArgs>(args?: SelectSubset<T, SettlementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settlements and returns the data saved in the database.
     * @param {SettlementCreateManyAndReturnArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlement = await prisma.settlement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settlements and only return the `id`
     * const settlementWithIdOnly = await prisma.settlement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettlementCreateManyAndReturnArgs>(args?: SelectSubset<T, SettlementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settlement.
     * @param {SettlementDeleteArgs} args - Arguments to delete one Settlement.
     * @example
     * // Delete one Settlement
     * const Settlement = await prisma.settlement.delete({
     *   where: {
     *     // ... filter to delete one Settlement
     *   }
     * })
     * 
     */
    delete<T extends SettlementDeleteArgs>(args: SelectSubset<T, SettlementDeleteArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settlement.
     * @param {SettlementUpdateArgs} args - Arguments to update one Settlement.
     * @example
     * // Update one Settlement
     * const settlement = await prisma.settlement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettlementUpdateArgs>(args: SelectSubset<T, SettlementUpdateArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settlements.
     * @param {SettlementDeleteManyArgs} args - Arguments to filter Settlements to delete.
     * @example
     * // Delete a few Settlements
     * const { count } = await prisma.settlement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettlementDeleteManyArgs>(args?: SelectSubset<T, SettlementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settlements
     * const settlement = await prisma.settlement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettlementUpdateManyArgs>(args: SelectSubset<T, SettlementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settlements and returns the data updated in the database.
     * @param {SettlementUpdateManyAndReturnArgs} args - Arguments to update many Settlements.
     * @example
     * // Update many Settlements
     * const settlement = await prisma.settlement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settlements and only return the `id`
     * const settlementWithIdOnly = await prisma.settlement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettlementUpdateManyAndReturnArgs>(args: SelectSubset<T, SettlementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settlement.
     * @param {SettlementUpsertArgs} args - Arguments to update or create a Settlement.
     * @example
     * // Update or create a Settlement
     * const settlement = await prisma.settlement.upsert({
     *   create: {
     *     // ... data to create a Settlement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settlement we want to update
     *   }
     * })
     */
    upsert<T extends SettlementUpsertArgs>(args: SelectSubset<T, SettlementUpsertArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementCountArgs} args - Arguments to filter Settlements to count.
     * @example
     * // Count the number of Settlements
     * const count = await prisma.settlement.count({
     *   where: {
     *     // ... the filter for the Settlements we want to count
     *   }
     * })
    **/
    count<T extends SettlementCountArgs>(
      args?: Subset<T, SettlementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettlementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettlementAggregateArgs>(args: Subset<T, SettlementAggregateArgs>): Prisma.PrismaPromise<GetSettlementAggregateType<T>>

    /**
     * Group by Settlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettlementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettlementGroupByArgs['orderBy'] }
        : { orderBy?: SettlementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettlementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettlementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settlement model
   */
  readonly fields: SettlementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settlement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettlementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ledger<T extends LedgerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LedgerDefaultArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transfers<T extends Settlement$transfersArgs<ExtArgs> = {}>(args?: Subset<T, Settlement$transfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settlement model
   */
  interface SettlementFieldRefs {
    readonly id: FieldRef<"Settlement", 'String'>
    readonly ledgerId: FieldRef<"Settlement", 'String'>
    readonly sourceBalanceFingerprint: FieldRef<"Settlement", 'String'>
    readonly status: FieldRef<"Settlement", 'SettlementStatus'>
    readonly totalTransferredMinor: FieldRef<"Settlement", 'Int'>
    readonly transactionCount: FieldRef<"Settlement", 'Int'>
    readonly createdByClerkUserId: FieldRef<"Settlement", 'String'>
    readonly createdAt: FieldRef<"Settlement", 'DateTime'>
    readonly completedByClerkUserId: FieldRef<"Settlement", 'String'>
    readonly completedAt: FieldRef<"Settlement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settlement findUnique
   */
  export type SettlementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement findUniqueOrThrow
   */
  export type SettlementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement findFirst
   */
  export type SettlementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement findFirstOrThrow
   */
  export type SettlementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlement to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement findMany
   */
  export type SettlementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter, which Settlements to fetch.
     */
    where?: SettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settlements to fetch.
     */
    orderBy?: SettlementOrderByWithRelationInput | SettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settlements.
     */
    cursor?: SettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settlements.
     */
    distinct?: SettlementScalarFieldEnum | SettlementScalarFieldEnum[]
  }

  /**
   * Settlement create
   */
  export type SettlementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The data needed to create a Settlement.
     */
    data: XOR<SettlementCreateInput, SettlementUncheckedCreateInput>
  }

  /**
   * Settlement createMany
   */
  export type SettlementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settlements.
     */
    data: SettlementCreateManyInput | SettlementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settlement createManyAndReturn
   */
  export type SettlementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * The data used to create many Settlements.
     */
    data: SettlementCreateManyInput | SettlementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settlement update
   */
  export type SettlementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The data needed to update a Settlement.
     */
    data: XOR<SettlementUpdateInput, SettlementUncheckedUpdateInput>
    /**
     * Choose, which Settlement to update.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement updateMany
   */
  export type SettlementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settlements.
     */
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyInput>
    /**
     * Filter which Settlements to update
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to update.
     */
    limit?: number
  }

  /**
   * Settlement updateManyAndReturn
   */
  export type SettlementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * The data used to update Settlements.
     */
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyInput>
    /**
     * Filter which Settlements to update
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settlement upsert
   */
  export type SettlementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * The filter to search for the Settlement to update in case it exists.
     */
    where: SettlementWhereUniqueInput
    /**
     * In case the Settlement found by the `where` argument doesn't exist, create a new Settlement with this data.
     */
    create: XOR<SettlementCreateInput, SettlementUncheckedCreateInput>
    /**
     * In case the Settlement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettlementUpdateInput, SettlementUncheckedUpdateInput>
  }

  /**
   * Settlement delete
   */
  export type SettlementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
    /**
     * Filter which Settlement to delete.
     */
    where: SettlementWhereUniqueInput
  }

  /**
   * Settlement deleteMany
   */
  export type SettlementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settlements to delete
     */
    where?: SettlementWhereInput
    /**
     * Limit how many Settlements to delete.
     */
    limit?: number
  }

  /**
   * Settlement.transfers
   */
  export type Settlement$transfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferInclude<ExtArgs> | null
    where?: SettlementTransferWhereInput
    orderBy?: SettlementTransferOrderByWithRelationInput | SettlementTransferOrderByWithRelationInput[]
    cursor?: SettlementTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementTransferScalarFieldEnum | SettlementTransferScalarFieldEnum[]
  }

  /**
   * Settlement without action
   */
  export type SettlementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settlement
     */
    select?: SettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settlement
     */
    omit?: SettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementInclude<ExtArgs> | null
  }


  /**
   * Model SettlementTransfer
   */

  export type AggregateSettlementTransfer = {
    _count: SettlementTransferCountAggregateOutputType | null
    _avg: SettlementTransferAvgAggregateOutputType | null
    _sum: SettlementTransferSumAggregateOutputType | null
    _min: SettlementTransferMinAggregateOutputType | null
    _max: SettlementTransferMaxAggregateOutputType | null
  }

  export type SettlementTransferAvgAggregateOutputType = {
    amountMinor: number | null
  }

  export type SettlementTransferSumAggregateOutputType = {
    amountMinor: number | null
  }

  export type SettlementTransferMinAggregateOutputType = {
    id: string | null
    settlementId: string | null
    fromMemberId: string | null
    toMemberId: string | null
    amountMinor: number | null
  }

  export type SettlementTransferMaxAggregateOutputType = {
    id: string | null
    settlementId: string | null
    fromMemberId: string | null
    toMemberId: string | null
    amountMinor: number | null
  }

  export type SettlementTransferCountAggregateOutputType = {
    id: number
    settlementId: number
    fromMemberId: number
    toMemberId: number
    amountMinor: number
    _all: number
  }


  export type SettlementTransferAvgAggregateInputType = {
    amountMinor?: true
  }

  export type SettlementTransferSumAggregateInputType = {
    amountMinor?: true
  }

  export type SettlementTransferMinAggregateInputType = {
    id?: true
    settlementId?: true
    fromMemberId?: true
    toMemberId?: true
    amountMinor?: true
  }

  export type SettlementTransferMaxAggregateInputType = {
    id?: true
    settlementId?: true
    fromMemberId?: true
    toMemberId?: true
    amountMinor?: true
  }

  export type SettlementTransferCountAggregateInputType = {
    id?: true
    settlementId?: true
    fromMemberId?: true
    toMemberId?: true
    amountMinor?: true
    _all?: true
  }

  export type SettlementTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SettlementTransfer to aggregate.
     */
    where?: SettlementTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettlementTransfers to fetch.
     */
    orderBy?: SettlementTransferOrderByWithRelationInput | SettlementTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettlementTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettlementTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettlementTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SettlementTransfers
    **/
    _count?: true | SettlementTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettlementTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettlementTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettlementTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettlementTransferMaxAggregateInputType
  }

  export type GetSettlementTransferAggregateType<T extends SettlementTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateSettlementTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettlementTransfer[P]>
      : GetScalarType<T[P], AggregateSettlementTransfer[P]>
  }




  export type SettlementTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementTransferWhereInput
    orderBy?: SettlementTransferOrderByWithAggregationInput | SettlementTransferOrderByWithAggregationInput[]
    by: SettlementTransferScalarFieldEnum[] | SettlementTransferScalarFieldEnum
    having?: SettlementTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettlementTransferCountAggregateInputType | true
    _avg?: SettlementTransferAvgAggregateInputType
    _sum?: SettlementTransferSumAggregateInputType
    _min?: SettlementTransferMinAggregateInputType
    _max?: SettlementTransferMaxAggregateInputType
  }

  export type SettlementTransferGroupByOutputType = {
    id: string
    settlementId: string
    fromMemberId: string
    toMemberId: string
    amountMinor: number
    _count: SettlementTransferCountAggregateOutputType | null
    _avg: SettlementTransferAvgAggregateOutputType | null
    _sum: SettlementTransferSumAggregateOutputType | null
    _min: SettlementTransferMinAggregateOutputType | null
    _max: SettlementTransferMaxAggregateOutputType | null
  }

  type GetSettlementTransferGroupByPayload<T extends SettlementTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettlementTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettlementTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettlementTransferGroupByOutputType[P]>
            : GetScalarType<T[P], SettlementTransferGroupByOutputType[P]>
        }
      >
    >


  export type SettlementTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    settlementId?: boolean
    fromMemberId?: boolean
    toMemberId?: boolean
    amountMinor?: boolean
    settlement?: boolean | SettlementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlementTransfer"]>

  export type SettlementTransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    settlementId?: boolean
    fromMemberId?: boolean
    toMemberId?: boolean
    amountMinor?: boolean
    settlement?: boolean | SettlementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlementTransfer"]>

  export type SettlementTransferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    settlementId?: boolean
    fromMemberId?: boolean
    toMemberId?: boolean
    amountMinor?: boolean
    settlement?: boolean | SettlementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlementTransfer"]>

  export type SettlementTransferSelectScalar = {
    id?: boolean
    settlementId?: boolean
    fromMemberId?: boolean
    toMemberId?: boolean
    amountMinor?: boolean
  }

  export type SettlementTransferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "settlementId" | "fromMemberId" | "toMemberId" | "amountMinor", ExtArgs["result"]["settlementTransfer"]>
  export type SettlementTransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settlement?: boolean | SettlementDefaultArgs<ExtArgs>
  }
  export type SettlementTransferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settlement?: boolean | SettlementDefaultArgs<ExtArgs>
  }
  export type SettlementTransferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settlement?: boolean | SettlementDefaultArgs<ExtArgs>
  }

  export type $SettlementTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SettlementTransfer"
    objects: {
      settlement: Prisma.$SettlementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      settlementId: string
      fromMemberId: string
      toMemberId: string
      amountMinor: number
    }, ExtArgs["result"]["settlementTransfer"]>
    composites: {}
  }

  type SettlementTransferGetPayload<S extends boolean | null | undefined | SettlementTransferDefaultArgs> = $Result.GetResult<Prisma.$SettlementTransferPayload, S>

  type SettlementTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettlementTransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettlementTransferCountAggregateInputType | true
    }

  export interface SettlementTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SettlementTransfer'], meta: { name: 'SettlementTransfer' } }
    /**
     * Find zero or one SettlementTransfer that matches the filter.
     * @param {SettlementTransferFindUniqueArgs} args - Arguments to find a SettlementTransfer
     * @example
     * // Get one SettlementTransfer
     * const settlementTransfer = await prisma.settlementTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettlementTransferFindUniqueArgs>(args: SelectSubset<T, SettlementTransferFindUniqueArgs<ExtArgs>>): Prisma__SettlementTransferClient<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SettlementTransfer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettlementTransferFindUniqueOrThrowArgs} args - Arguments to find a SettlementTransfer
     * @example
     * // Get one SettlementTransfer
     * const settlementTransfer = await prisma.settlementTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettlementTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, SettlementTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettlementTransferClient<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SettlementTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementTransferFindFirstArgs} args - Arguments to find a SettlementTransfer
     * @example
     * // Get one SettlementTransfer
     * const settlementTransfer = await prisma.settlementTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettlementTransferFindFirstArgs>(args?: SelectSubset<T, SettlementTransferFindFirstArgs<ExtArgs>>): Prisma__SettlementTransferClient<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SettlementTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementTransferFindFirstOrThrowArgs} args - Arguments to find a SettlementTransfer
     * @example
     * // Get one SettlementTransfer
     * const settlementTransfer = await prisma.settlementTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettlementTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, SettlementTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettlementTransferClient<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SettlementTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SettlementTransfers
     * const settlementTransfers = await prisma.settlementTransfer.findMany()
     * 
     * // Get first 10 SettlementTransfers
     * const settlementTransfers = await prisma.settlementTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settlementTransferWithIdOnly = await prisma.settlementTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettlementTransferFindManyArgs>(args?: SelectSubset<T, SettlementTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SettlementTransfer.
     * @param {SettlementTransferCreateArgs} args - Arguments to create a SettlementTransfer.
     * @example
     * // Create one SettlementTransfer
     * const SettlementTransfer = await prisma.settlementTransfer.create({
     *   data: {
     *     // ... data to create a SettlementTransfer
     *   }
     * })
     * 
     */
    create<T extends SettlementTransferCreateArgs>(args: SelectSubset<T, SettlementTransferCreateArgs<ExtArgs>>): Prisma__SettlementTransferClient<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SettlementTransfers.
     * @param {SettlementTransferCreateManyArgs} args - Arguments to create many SettlementTransfers.
     * @example
     * // Create many SettlementTransfers
     * const settlementTransfer = await prisma.settlementTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettlementTransferCreateManyArgs>(args?: SelectSubset<T, SettlementTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SettlementTransfers and returns the data saved in the database.
     * @param {SettlementTransferCreateManyAndReturnArgs} args - Arguments to create many SettlementTransfers.
     * @example
     * // Create many SettlementTransfers
     * const settlementTransfer = await prisma.settlementTransfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SettlementTransfers and only return the `id`
     * const settlementTransferWithIdOnly = await prisma.settlementTransfer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettlementTransferCreateManyAndReturnArgs>(args?: SelectSubset<T, SettlementTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SettlementTransfer.
     * @param {SettlementTransferDeleteArgs} args - Arguments to delete one SettlementTransfer.
     * @example
     * // Delete one SettlementTransfer
     * const SettlementTransfer = await prisma.settlementTransfer.delete({
     *   where: {
     *     // ... filter to delete one SettlementTransfer
     *   }
     * })
     * 
     */
    delete<T extends SettlementTransferDeleteArgs>(args: SelectSubset<T, SettlementTransferDeleteArgs<ExtArgs>>): Prisma__SettlementTransferClient<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SettlementTransfer.
     * @param {SettlementTransferUpdateArgs} args - Arguments to update one SettlementTransfer.
     * @example
     * // Update one SettlementTransfer
     * const settlementTransfer = await prisma.settlementTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettlementTransferUpdateArgs>(args: SelectSubset<T, SettlementTransferUpdateArgs<ExtArgs>>): Prisma__SettlementTransferClient<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SettlementTransfers.
     * @param {SettlementTransferDeleteManyArgs} args - Arguments to filter SettlementTransfers to delete.
     * @example
     * // Delete a few SettlementTransfers
     * const { count } = await prisma.settlementTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettlementTransferDeleteManyArgs>(args?: SelectSubset<T, SettlementTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SettlementTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SettlementTransfers
     * const settlementTransfer = await prisma.settlementTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettlementTransferUpdateManyArgs>(args: SelectSubset<T, SettlementTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SettlementTransfers and returns the data updated in the database.
     * @param {SettlementTransferUpdateManyAndReturnArgs} args - Arguments to update many SettlementTransfers.
     * @example
     * // Update many SettlementTransfers
     * const settlementTransfer = await prisma.settlementTransfer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SettlementTransfers and only return the `id`
     * const settlementTransferWithIdOnly = await prisma.settlementTransfer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettlementTransferUpdateManyAndReturnArgs>(args: SelectSubset<T, SettlementTransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SettlementTransfer.
     * @param {SettlementTransferUpsertArgs} args - Arguments to update or create a SettlementTransfer.
     * @example
     * // Update or create a SettlementTransfer
     * const settlementTransfer = await prisma.settlementTransfer.upsert({
     *   create: {
     *     // ... data to create a SettlementTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SettlementTransfer we want to update
     *   }
     * })
     */
    upsert<T extends SettlementTransferUpsertArgs>(args: SelectSubset<T, SettlementTransferUpsertArgs<ExtArgs>>): Prisma__SettlementTransferClient<$Result.GetResult<Prisma.$SettlementTransferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SettlementTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementTransferCountArgs} args - Arguments to filter SettlementTransfers to count.
     * @example
     * // Count the number of SettlementTransfers
     * const count = await prisma.settlementTransfer.count({
     *   where: {
     *     // ... the filter for the SettlementTransfers we want to count
     *   }
     * })
    **/
    count<T extends SettlementTransferCountArgs>(
      args?: Subset<T, SettlementTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettlementTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SettlementTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettlementTransferAggregateArgs>(args: Subset<T, SettlementTransferAggregateArgs>): Prisma.PrismaPromise<GetSettlementTransferAggregateType<T>>

    /**
     * Group by SettlementTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementTransferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettlementTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettlementTransferGroupByArgs['orderBy'] }
        : { orderBy?: SettlementTransferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettlementTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettlementTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SettlementTransfer model
   */
  readonly fields: SettlementTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SettlementTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettlementTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    settlement<T extends SettlementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SettlementDefaultArgs<ExtArgs>>): Prisma__SettlementClient<$Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SettlementTransfer model
   */
  interface SettlementTransferFieldRefs {
    readonly id: FieldRef<"SettlementTransfer", 'String'>
    readonly settlementId: FieldRef<"SettlementTransfer", 'String'>
    readonly fromMemberId: FieldRef<"SettlementTransfer", 'String'>
    readonly toMemberId: FieldRef<"SettlementTransfer", 'String'>
    readonly amountMinor: FieldRef<"SettlementTransfer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SettlementTransfer findUnique
   */
  export type SettlementTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferInclude<ExtArgs> | null
    /**
     * Filter, which SettlementTransfer to fetch.
     */
    where: SettlementTransferWhereUniqueInput
  }

  /**
   * SettlementTransfer findUniqueOrThrow
   */
  export type SettlementTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferInclude<ExtArgs> | null
    /**
     * Filter, which SettlementTransfer to fetch.
     */
    where: SettlementTransferWhereUniqueInput
  }

  /**
   * SettlementTransfer findFirst
   */
  export type SettlementTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferInclude<ExtArgs> | null
    /**
     * Filter, which SettlementTransfer to fetch.
     */
    where?: SettlementTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettlementTransfers to fetch.
     */
    orderBy?: SettlementTransferOrderByWithRelationInput | SettlementTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SettlementTransfers.
     */
    cursor?: SettlementTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettlementTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettlementTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SettlementTransfers.
     */
    distinct?: SettlementTransferScalarFieldEnum | SettlementTransferScalarFieldEnum[]
  }

  /**
   * SettlementTransfer findFirstOrThrow
   */
  export type SettlementTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferInclude<ExtArgs> | null
    /**
     * Filter, which SettlementTransfer to fetch.
     */
    where?: SettlementTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettlementTransfers to fetch.
     */
    orderBy?: SettlementTransferOrderByWithRelationInput | SettlementTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SettlementTransfers.
     */
    cursor?: SettlementTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettlementTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettlementTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SettlementTransfers.
     */
    distinct?: SettlementTransferScalarFieldEnum | SettlementTransferScalarFieldEnum[]
  }

  /**
   * SettlementTransfer findMany
   */
  export type SettlementTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferInclude<ExtArgs> | null
    /**
     * Filter, which SettlementTransfers to fetch.
     */
    where?: SettlementTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettlementTransfers to fetch.
     */
    orderBy?: SettlementTransferOrderByWithRelationInput | SettlementTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SettlementTransfers.
     */
    cursor?: SettlementTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettlementTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettlementTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SettlementTransfers.
     */
    distinct?: SettlementTransferScalarFieldEnum | SettlementTransferScalarFieldEnum[]
  }

  /**
   * SettlementTransfer create
   */
  export type SettlementTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferInclude<ExtArgs> | null
    /**
     * The data needed to create a SettlementTransfer.
     */
    data: XOR<SettlementTransferCreateInput, SettlementTransferUncheckedCreateInput>
  }

  /**
   * SettlementTransfer createMany
   */
  export type SettlementTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SettlementTransfers.
     */
    data: SettlementTransferCreateManyInput | SettlementTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SettlementTransfer createManyAndReturn
   */
  export type SettlementTransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * The data used to create many SettlementTransfers.
     */
    data: SettlementTransferCreateManyInput | SettlementTransferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SettlementTransfer update
   */
  export type SettlementTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferInclude<ExtArgs> | null
    /**
     * The data needed to update a SettlementTransfer.
     */
    data: XOR<SettlementTransferUpdateInput, SettlementTransferUncheckedUpdateInput>
    /**
     * Choose, which SettlementTransfer to update.
     */
    where: SettlementTransferWhereUniqueInput
  }

  /**
   * SettlementTransfer updateMany
   */
  export type SettlementTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SettlementTransfers.
     */
    data: XOR<SettlementTransferUpdateManyMutationInput, SettlementTransferUncheckedUpdateManyInput>
    /**
     * Filter which SettlementTransfers to update
     */
    where?: SettlementTransferWhereInput
    /**
     * Limit how many SettlementTransfers to update.
     */
    limit?: number
  }

  /**
   * SettlementTransfer updateManyAndReturn
   */
  export type SettlementTransferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * The data used to update SettlementTransfers.
     */
    data: XOR<SettlementTransferUpdateManyMutationInput, SettlementTransferUncheckedUpdateManyInput>
    /**
     * Filter which SettlementTransfers to update
     */
    where?: SettlementTransferWhereInput
    /**
     * Limit how many SettlementTransfers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SettlementTransfer upsert
   */
  export type SettlementTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferInclude<ExtArgs> | null
    /**
     * The filter to search for the SettlementTransfer to update in case it exists.
     */
    where: SettlementTransferWhereUniqueInput
    /**
     * In case the SettlementTransfer found by the `where` argument doesn't exist, create a new SettlementTransfer with this data.
     */
    create: XOR<SettlementTransferCreateInput, SettlementTransferUncheckedCreateInput>
    /**
     * In case the SettlementTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettlementTransferUpdateInput, SettlementTransferUncheckedUpdateInput>
  }

  /**
   * SettlementTransfer delete
   */
  export type SettlementTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferInclude<ExtArgs> | null
    /**
     * Filter which SettlementTransfer to delete.
     */
    where: SettlementTransferWhereUniqueInput
  }

  /**
   * SettlementTransfer deleteMany
   */
  export type SettlementTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SettlementTransfers to delete
     */
    where?: SettlementTransferWhereInput
    /**
     * Limit how many SettlementTransfers to delete.
     */
    limit?: number
  }

  /**
   * SettlementTransfer without action
   */
  export type SettlementTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementTransfer
     */
    select?: SettlementTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SettlementTransfer
     */
    omit?: SettlementTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementTransferInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LedgerScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    description: 'description',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LedgerScalarFieldEnum = (typeof LedgerScalarFieldEnum)[keyof typeof LedgerScalarFieldEnum]


  export const LedgerMemberScalarFieldEnum: {
    id: 'id',
    ledgerId: 'ledgerId',
    clerkUserId: 'clerkUserId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type LedgerMemberScalarFieldEnum = (typeof LedgerMemberScalarFieldEnum)[keyof typeof LedgerMemberScalarFieldEnum]


  export const LedgerInviteScalarFieldEnum: {
    id: 'id',
    ledgerId: 'ledgerId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt',
    createdByClerkUserId: 'createdByClerkUserId'
  };

  export type LedgerInviteScalarFieldEnum = (typeof LedgerInviteScalarFieldEnum)[keyof typeof LedgerInviteScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    ledgerId: 'ledgerId',
    payerMemberId: 'payerMemberId',
    createdByClerkUserId: 'createdByClerkUserId',
    amountMinor: 'amountMinor',
    description: 'description',
    category: 'category',
    proofUrl: 'proofUrl',
    splitType: 'splitType',
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const ExpenseShareScalarFieldEnum: {
    id: 'id',
    expenseId: 'expenseId',
    memberId: 'memberId',
    amountMinor: 'amountMinor',
    createdAt: 'createdAt'
  };

  export type ExpenseShareScalarFieldEnum = (typeof ExpenseShareScalarFieldEnum)[keyof typeof ExpenseShareScalarFieldEnum]


  export const AuditEventScalarFieldEnum: {
    id: 'id',
    ledgerId: 'ledgerId',
    actorClerkUserId: 'actorClerkUserId',
    eventType: 'eventType',
    entityType: 'entityType',
    entityId: 'entityId',
    payload: 'payload',
    occurredAt: 'occurredAt'
  };

  export type AuditEventScalarFieldEnum = (typeof AuditEventScalarFieldEnum)[keyof typeof AuditEventScalarFieldEnum]


  export const SettlementScalarFieldEnum: {
    id: 'id',
    ledgerId: 'ledgerId',
    sourceBalanceFingerprint: 'sourceBalanceFingerprint',
    status: 'status',
    totalTransferredMinor: 'totalTransferredMinor',
    transactionCount: 'transactionCount',
    createdByClerkUserId: 'createdByClerkUserId',
    createdAt: 'createdAt',
    completedByClerkUserId: 'completedByClerkUserId',
    completedAt: 'completedAt'
  };

  export type SettlementScalarFieldEnum = (typeof SettlementScalarFieldEnum)[keyof typeof SettlementScalarFieldEnum]


  export const SettlementTransferScalarFieldEnum: {
    id: 'id',
    settlementId: 'settlementId',
    fromMemberId: 'fromMemberId',
    toMemberId: 'toMemberId',
    amountMinor: 'amountMinor'
  };

  export type SettlementTransferScalarFieldEnum = (typeof SettlementTransferScalarFieldEnum)[keyof typeof SettlementTransferScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'LedgerType'
   */
  export type EnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType'>
    


  /**
   * Reference to a field of type 'LedgerType[]'
   */
  export type ListEnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MemberRole'
   */
  export type EnumMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberRole'>
    


  /**
   * Reference to a field of type 'MemberRole[]'
   */
  export type ListEnumMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ExpenseCategory'
   */
  export type EnumExpenseCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseCategory'>
    


  /**
   * Reference to a field of type 'ExpenseCategory[]'
   */
  export type ListEnumExpenseCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseCategory[]'>
    


  /**
   * Reference to a field of type 'SplitType'
   */
  export type EnumSplitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SplitType'>
    


  /**
   * Reference to a field of type 'SplitType[]'
   */
  export type ListEnumSplitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SplitType[]'>
    


  /**
   * Reference to a field of type 'AuditEventType'
   */
  export type EnumAuditEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditEventType'>
    


  /**
   * Reference to a field of type 'AuditEventType[]'
   */
  export type ListEnumAuditEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditEventType[]'>
    


  /**
   * Reference to a field of type 'AuditEntityType'
   */
  export type EnumAuditEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditEntityType'>
    


  /**
   * Reference to a field of type 'AuditEntityType[]'
   */
  export type ListEnumAuditEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditEntityType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SettlementStatus'
   */
  export type EnumSettlementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SettlementStatus'>
    


  /**
   * Reference to a field of type 'SettlementStatus[]'
   */
  export type ListEnumSettlementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SettlementStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LedgerWhereInput = {
    AND?: LedgerWhereInput | LedgerWhereInput[]
    OR?: LedgerWhereInput[]
    NOT?: LedgerWhereInput | LedgerWhereInput[]
    id?: StringFilter<"Ledger"> | string
    ownerId?: StringFilter<"Ledger"> | string
    name?: StringFilter<"Ledger"> | string
    description?: StringNullableFilter<"Ledger"> | string | null
    type?: EnumLedgerTypeFilter<"Ledger"> | $Enums.LedgerType
    createdAt?: DateTimeFilter<"Ledger"> | Date | string
    updatedAt?: DateTimeFilter<"Ledger"> | Date | string
    members?: LedgerMemberListRelationFilter
    invites?: LedgerInviteListRelationFilter
    expenses?: ExpenseListRelationFilter
    auditEvents?: AuditEventListRelationFilter
    settlements?: SettlementListRelationFilter
  }

  export type LedgerOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: LedgerMemberOrderByRelationAggregateInput
    invites?: LedgerInviteOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    auditEvents?: AuditEventOrderByRelationAggregateInput
    settlements?: SettlementOrderByRelationAggregateInput
  }

  export type LedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LedgerWhereInput | LedgerWhereInput[]
    OR?: LedgerWhereInput[]
    NOT?: LedgerWhereInput | LedgerWhereInput[]
    ownerId?: StringFilter<"Ledger"> | string
    name?: StringFilter<"Ledger"> | string
    description?: StringNullableFilter<"Ledger"> | string | null
    type?: EnumLedgerTypeFilter<"Ledger"> | $Enums.LedgerType
    createdAt?: DateTimeFilter<"Ledger"> | Date | string
    updatedAt?: DateTimeFilter<"Ledger"> | Date | string
    members?: LedgerMemberListRelationFilter
    invites?: LedgerInviteListRelationFilter
    expenses?: ExpenseListRelationFilter
    auditEvents?: AuditEventListRelationFilter
    settlements?: SettlementListRelationFilter
  }, "id">

  export type LedgerOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LedgerCountOrderByAggregateInput
    _max?: LedgerMaxOrderByAggregateInput
    _min?: LedgerMinOrderByAggregateInput
  }

  export type LedgerScalarWhereWithAggregatesInput = {
    AND?: LedgerScalarWhereWithAggregatesInput | LedgerScalarWhereWithAggregatesInput[]
    OR?: LedgerScalarWhereWithAggregatesInput[]
    NOT?: LedgerScalarWhereWithAggregatesInput | LedgerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ledger"> | string
    ownerId?: StringWithAggregatesFilter<"Ledger"> | string
    name?: StringWithAggregatesFilter<"Ledger"> | string
    description?: StringNullableWithAggregatesFilter<"Ledger"> | string | null
    type?: EnumLedgerTypeWithAggregatesFilter<"Ledger"> | $Enums.LedgerType
    createdAt?: DateTimeWithAggregatesFilter<"Ledger"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ledger"> | Date | string
  }

  export type LedgerMemberWhereInput = {
    AND?: LedgerMemberWhereInput | LedgerMemberWhereInput[]
    OR?: LedgerMemberWhereInput[]
    NOT?: LedgerMemberWhereInput | LedgerMemberWhereInput[]
    id?: StringFilter<"LedgerMember"> | string
    ledgerId?: StringFilter<"LedgerMember"> | string
    clerkUserId?: StringFilter<"LedgerMember"> | string
    role?: EnumMemberRoleFilter<"LedgerMember"> | $Enums.MemberRole
    createdAt?: DateTimeFilter<"LedgerMember"> | Date | string
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
    paidExpenses?: ExpenseListRelationFilter
    shares?: ExpenseShareListRelationFilter
  }

  export type LedgerMemberOrderByWithRelationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    clerkUserId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    ledger?: LedgerOrderByWithRelationInput
    paidExpenses?: ExpenseOrderByRelationAggregateInput
    shares?: ExpenseShareOrderByRelationAggregateInput
  }

  export type LedgerMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ledgerId_clerkUserId?: LedgerMemberLedgerIdClerkUserIdCompoundUniqueInput
    AND?: LedgerMemberWhereInput | LedgerMemberWhereInput[]
    OR?: LedgerMemberWhereInput[]
    NOT?: LedgerMemberWhereInput | LedgerMemberWhereInput[]
    ledgerId?: StringFilter<"LedgerMember"> | string
    clerkUserId?: StringFilter<"LedgerMember"> | string
    role?: EnumMemberRoleFilter<"LedgerMember"> | $Enums.MemberRole
    createdAt?: DateTimeFilter<"LedgerMember"> | Date | string
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
    paidExpenses?: ExpenseListRelationFilter
    shares?: ExpenseShareListRelationFilter
  }, "id" | "ledgerId_clerkUserId">

  export type LedgerMemberOrderByWithAggregationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    clerkUserId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: LedgerMemberCountOrderByAggregateInput
    _max?: LedgerMemberMaxOrderByAggregateInput
    _min?: LedgerMemberMinOrderByAggregateInput
  }

  export type LedgerMemberScalarWhereWithAggregatesInput = {
    AND?: LedgerMemberScalarWhereWithAggregatesInput | LedgerMemberScalarWhereWithAggregatesInput[]
    OR?: LedgerMemberScalarWhereWithAggregatesInput[]
    NOT?: LedgerMemberScalarWhereWithAggregatesInput | LedgerMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LedgerMember"> | string
    ledgerId?: StringWithAggregatesFilter<"LedgerMember"> | string
    clerkUserId?: StringWithAggregatesFilter<"LedgerMember"> | string
    role?: EnumMemberRoleWithAggregatesFilter<"LedgerMember"> | $Enums.MemberRole
    createdAt?: DateTimeWithAggregatesFilter<"LedgerMember"> | Date | string
  }

  export type LedgerInviteWhereInput = {
    AND?: LedgerInviteWhereInput | LedgerInviteWhereInput[]
    OR?: LedgerInviteWhereInput[]
    NOT?: LedgerInviteWhereInput | LedgerInviteWhereInput[]
    id?: StringFilter<"LedgerInvite"> | string
    ledgerId?: StringFilter<"LedgerInvite"> | string
    tokenHash?: StringFilter<"LedgerInvite"> | string
    expiresAt?: DateTimeFilter<"LedgerInvite"> | Date | string
    revokedAt?: DateTimeNullableFilter<"LedgerInvite"> | Date | string | null
    createdAt?: DateTimeFilter<"LedgerInvite"> | Date | string
    createdByClerkUserId?: StringFilter<"LedgerInvite"> | string
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
  }

  export type LedgerInviteOrderByWithRelationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdByClerkUserId?: SortOrder
    ledger?: LedgerOrderByWithRelationInput
  }

  export type LedgerInviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: LedgerInviteWhereInput | LedgerInviteWhereInput[]
    OR?: LedgerInviteWhereInput[]
    NOT?: LedgerInviteWhereInput | LedgerInviteWhereInput[]
    ledgerId?: StringFilter<"LedgerInvite"> | string
    expiresAt?: DateTimeFilter<"LedgerInvite"> | Date | string
    revokedAt?: DateTimeNullableFilter<"LedgerInvite"> | Date | string | null
    createdAt?: DateTimeFilter<"LedgerInvite"> | Date | string
    createdByClerkUserId?: StringFilter<"LedgerInvite"> | string
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
  }, "id" | "tokenHash">

  export type LedgerInviteOrderByWithAggregationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdByClerkUserId?: SortOrder
    _count?: LedgerInviteCountOrderByAggregateInput
    _max?: LedgerInviteMaxOrderByAggregateInput
    _min?: LedgerInviteMinOrderByAggregateInput
  }

  export type LedgerInviteScalarWhereWithAggregatesInput = {
    AND?: LedgerInviteScalarWhereWithAggregatesInput | LedgerInviteScalarWhereWithAggregatesInput[]
    OR?: LedgerInviteScalarWhereWithAggregatesInput[]
    NOT?: LedgerInviteScalarWhereWithAggregatesInput | LedgerInviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LedgerInvite"> | string
    ledgerId?: StringWithAggregatesFilter<"LedgerInvite"> | string
    tokenHash?: StringWithAggregatesFilter<"LedgerInvite"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"LedgerInvite"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"LedgerInvite"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LedgerInvite"> | Date | string
    createdByClerkUserId?: StringWithAggregatesFilter<"LedgerInvite"> | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    ledgerId?: StringFilter<"Expense"> | string
    payerMemberId?: StringFilter<"Expense"> | string
    createdByClerkUserId?: StringFilter<"Expense"> | string
    amountMinor?: IntFilter<"Expense"> | number
    description?: StringFilter<"Expense"> | string
    category?: EnumExpenseCategoryNullableFilter<"Expense"> | $Enums.ExpenseCategory | null
    proofUrl?: StringNullableFilter<"Expense"> | string | null
    splitType?: EnumSplitTypeFilter<"Expense"> | $Enums.SplitType
    idempotencyKey?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
    payer?: XOR<LedgerMemberScalarRelationFilter, LedgerMemberWhereInput>
    shares?: ExpenseShareListRelationFilter
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    payerMemberId?: SortOrder
    createdByClerkUserId?: SortOrder
    amountMinor?: SortOrder
    description?: SortOrder
    category?: SortOrderInput | SortOrder
    proofUrl?: SortOrderInput | SortOrder
    splitType?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ledger?: LedgerOrderByWithRelationInput
    payer?: LedgerMemberOrderByWithRelationInput
    shares?: ExpenseShareOrderByRelationAggregateInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ledgerId_idempotencyKey?: ExpenseLedgerIdIdempotencyKeyCompoundUniqueInput
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    ledgerId?: StringFilter<"Expense"> | string
    payerMemberId?: StringFilter<"Expense"> | string
    createdByClerkUserId?: StringFilter<"Expense"> | string
    amountMinor?: IntFilter<"Expense"> | number
    description?: StringFilter<"Expense"> | string
    category?: EnumExpenseCategoryNullableFilter<"Expense"> | $Enums.ExpenseCategory | null
    proofUrl?: StringNullableFilter<"Expense"> | string | null
    splitType?: EnumSplitTypeFilter<"Expense"> | $Enums.SplitType
    idempotencyKey?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
    payer?: XOR<LedgerMemberScalarRelationFilter, LedgerMemberWhereInput>
    shares?: ExpenseShareListRelationFilter
  }, "id" | "ledgerId_idempotencyKey">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    payerMemberId?: SortOrder
    createdByClerkUserId?: SortOrder
    amountMinor?: SortOrder
    description?: SortOrder
    category?: SortOrderInput | SortOrder
    proofUrl?: SortOrderInput | SortOrder
    splitType?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    ledgerId?: StringWithAggregatesFilter<"Expense"> | string
    payerMemberId?: StringWithAggregatesFilter<"Expense"> | string
    createdByClerkUserId?: StringWithAggregatesFilter<"Expense"> | string
    amountMinor?: IntWithAggregatesFilter<"Expense"> | number
    description?: StringWithAggregatesFilter<"Expense"> | string
    category?: EnumExpenseCategoryNullableWithAggregatesFilter<"Expense"> | $Enums.ExpenseCategory | null
    proofUrl?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    splitType?: EnumSplitTypeWithAggregatesFilter<"Expense"> | $Enums.SplitType
    idempotencyKey?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type ExpenseShareWhereInput = {
    AND?: ExpenseShareWhereInput | ExpenseShareWhereInput[]
    OR?: ExpenseShareWhereInput[]
    NOT?: ExpenseShareWhereInput | ExpenseShareWhereInput[]
    id?: StringFilter<"ExpenseShare"> | string
    expenseId?: StringFilter<"ExpenseShare"> | string
    memberId?: StringFilter<"ExpenseShare"> | string
    amountMinor?: IntFilter<"ExpenseShare"> | number
    createdAt?: DateTimeFilter<"ExpenseShare"> | Date | string
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    member?: XOR<LedgerMemberScalarRelationFilter, LedgerMemberWhereInput>
  }

  export type ExpenseShareOrderByWithRelationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    memberId?: SortOrder
    amountMinor?: SortOrder
    createdAt?: SortOrder
    expense?: ExpenseOrderByWithRelationInput
    member?: LedgerMemberOrderByWithRelationInput
  }

  export type ExpenseShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    expenseId_memberId?: ExpenseShareExpenseIdMemberIdCompoundUniqueInput
    AND?: ExpenseShareWhereInput | ExpenseShareWhereInput[]
    OR?: ExpenseShareWhereInput[]
    NOT?: ExpenseShareWhereInput | ExpenseShareWhereInput[]
    expenseId?: StringFilter<"ExpenseShare"> | string
    memberId?: StringFilter<"ExpenseShare"> | string
    amountMinor?: IntFilter<"ExpenseShare"> | number
    createdAt?: DateTimeFilter<"ExpenseShare"> | Date | string
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    member?: XOR<LedgerMemberScalarRelationFilter, LedgerMemberWhereInput>
  }, "id" | "expenseId_memberId">

  export type ExpenseShareOrderByWithAggregationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    memberId?: SortOrder
    amountMinor?: SortOrder
    createdAt?: SortOrder
    _count?: ExpenseShareCountOrderByAggregateInput
    _avg?: ExpenseShareAvgOrderByAggregateInput
    _max?: ExpenseShareMaxOrderByAggregateInput
    _min?: ExpenseShareMinOrderByAggregateInput
    _sum?: ExpenseShareSumOrderByAggregateInput
  }

  export type ExpenseShareScalarWhereWithAggregatesInput = {
    AND?: ExpenseShareScalarWhereWithAggregatesInput | ExpenseShareScalarWhereWithAggregatesInput[]
    OR?: ExpenseShareScalarWhereWithAggregatesInput[]
    NOT?: ExpenseShareScalarWhereWithAggregatesInput | ExpenseShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpenseShare"> | string
    expenseId?: StringWithAggregatesFilter<"ExpenseShare"> | string
    memberId?: StringWithAggregatesFilter<"ExpenseShare"> | string
    amountMinor?: IntWithAggregatesFilter<"ExpenseShare"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ExpenseShare"> | Date | string
  }

  export type AuditEventWhereInput = {
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    id?: StringFilter<"AuditEvent"> | string
    ledgerId?: StringFilter<"AuditEvent"> | string
    actorClerkUserId?: StringFilter<"AuditEvent"> | string
    eventType?: EnumAuditEventTypeFilter<"AuditEvent"> | $Enums.AuditEventType
    entityType?: EnumAuditEntityTypeFilter<"AuditEvent"> | $Enums.AuditEntityType
    entityId?: StringNullableFilter<"AuditEvent"> | string | null
    payload?: JsonFilter<"AuditEvent">
    occurredAt?: DateTimeFilter<"AuditEvent"> | Date | string
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
  }

  export type AuditEventOrderByWithRelationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    actorClerkUserId?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
    ledger?: LedgerOrderByWithRelationInput
  }

  export type AuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    ledgerId?: StringFilter<"AuditEvent"> | string
    actorClerkUserId?: StringFilter<"AuditEvent"> | string
    eventType?: EnumAuditEventTypeFilter<"AuditEvent"> | $Enums.AuditEventType
    entityType?: EnumAuditEntityTypeFilter<"AuditEvent"> | $Enums.AuditEntityType
    entityId?: StringNullableFilter<"AuditEvent"> | string | null
    payload?: JsonFilter<"AuditEvent">
    occurredAt?: DateTimeFilter<"AuditEvent"> | Date | string
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
  }, "id">

  export type AuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    actorClerkUserId?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
    _count?: AuditEventCountOrderByAggregateInput
    _max?: AuditEventMaxOrderByAggregateInput
    _min?: AuditEventMinOrderByAggregateInput
  }

  export type AuditEventScalarWhereWithAggregatesInput = {
    AND?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    OR?: AuditEventScalarWhereWithAggregatesInput[]
    NOT?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditEvent"> | string
    ledgerId?: StringWithAggregatesFilter<"AuditEvent"> | string
    actorClerkUserId?: StringWithAggregatesFilter<"AuditEvent"> | string
    eventType?: EnumAuditEventTypeWithAggregatesFilter<"AuditEvent"> | $Enums.AuditEventType
    entityType?: EnumAuditEntityTypeWithAggregatesFilter<"AuditEvent"> | $Enums.AuditEntityType
    entityId?: StringNullableWithAggregatesFilter<"AuditEvent"> | string | null
    payload?: JsonWithAggregatesFilter<"AuditEvent">
    occurredAt?: DateTimeWithAggregatesFilter<"AuditEvent"> | Date | string
  }

  export type SettlementWhereInput = {
    AND?: SettlementWhereInput | SettlementWhereInput[]
    OR?: SettlementWhereInput[]
    NOT?: SettlementWhereInput | SettlementWhereInput[]
    id?: StringFilter<"Settlement"> | string
    ledgerId?: StringFilter<"Settlement"> | string
    sourceBalanceFingerprint?: StringFilter<"Settlement"> | string
    status?: EnumSettlementStatusFilter<"Settlement"> | $Enums.SettlementStatus
    totalTransferredMinor?: IntFilter<"Settlement"> | number
    transactionCount?: IntFilter<"Settlement"> | number
    createdByClerkUserId?: StringFilter<"Settlement"> | string
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    completedByClerkUserId?: StringNullableFilter<"Settlement"> | string | null
    completedAt?: DateTimeNullableFilter<"Settlement"> | Date | string | null
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
    transfers?: SettlementTransferListRelationFilter
  }

  export type SettlementOrderByWithRelationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    sourceBalanceFingerprint?: SortOrder
    status?: SortOrder
    totalTransferredMinor?: SortOrder
    transactionCount?: SortOrder
    createdByClerkUserId?: SortOrder
    createdAt?: SortOrder
    completedByClerkUserId?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    ledger?: LedgerOrderByWithRelationInput
    transfers?: SettlementTransferOrderByRelationAggregateInput
  }

  export type SettlementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettlementWhereInput | SettlementWhereInput[]
    OR?: SettlementWhereInput[]
    NOT?: SettlementWhereInput | SettlementWhereInput[]
    ledgerId?: StringFilter<"Settlement"> | string
    sourceBalanceFingerprint?: StringFilter<"Settlement"> | string
    status?: EnumSettlementStatusFilter<"Settlement"> | $Enums.SettlementStatus
    totalTransferredMinor?: IntFilter<"Settlement"> | number
    transactionCount?: IntFilter<"Settlement"> | number
    createdByClerkUserId?: StringFilter<"Settlement"> | string
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    completedByClerkUserId?: StringNullableFilter<"Settlement"> | string | null
    completedAt?: DateTimeNullableFilter<"Settlement"> | Date | string | null
    ledger?: XOR<LedgerScalarRelationFilter, LedgerWhereInput>
    transfers?: SettlementTransferListRelationFilter
  }, "id">

  export type SettlementOrderByWithAggregationInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    sourceBalanceFingerprint?: SortOrder
    status?: SortOrder
    totalTransferredMinor?: SortOrder
    transactionCount?: SortOrder
    createdByClerkUserId?: SortOrder
    createdAt?: SortOrder
    completedByClerkUserId?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: SettlementCountOrderByAggregateInput
    _avg?: SettlementAvgOrderByAggregateInput
    _max?: SettlementMaxOrderByAggregateInput
    _min?: SettlementMinOrderByAggregateInput
    _sum?: SettlementSumOrderByAggregateInput
  }

  export type SettlementScalarWhereWithAggregatesInput = {
    AND?: SettlementScalarWhereWithAggregatesInput | SettlementScalarWhereWithAggregatesInput[]
    OR?: SettlementScalarWhereWithAggregatesInput[]
    NOT?: SettlementScalarWhereWithAggregatesInput | SettlementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settlement"> | string
    ledgerId?: StringWithAggregatesFilter<"Settlement"> | string
    sourceBalanceFingerprint?: StringWithAggregatesFilter<"Settlement"> | string
    status?: EnumSettlementStatusWithAggregatesFilter<"Settlement"> | $Enums.SettlementStatus
    totalTransferredMinor?: IntWithAggregatesFilter<"Settlement"> | number
    transactionCount?: IntWithAggregatesFilter<"Settlement"> | number
    createdByClerkUserId?: StringWithAggregatesFilter<"Settlement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Settlement"> | Date | string
    completedByClerkUserId?: StringNullableWithAggregatesFilter<"Settlement"> | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Settlement"> | Date | string | null
  }

  export type SettlementTransferWhereInput = {
    AND?: SettlementTransferWhereInput | SettlementTransferWhereInput[]
    OR?: SettlementTransferWhereInput[]
    NOT?: SettlementTransferWhereInput | SettlementTransferWhereInput[]
    id?: StringFilter<"SettlementTransfer"> | string
    settlementId?: StringFilter<"SettlementTransfer"> | string
    fromMemberId?: StringFilter<"SettlementTransfer"> | string
    toMemberId?: StringFilter<"SettlementTransfer"> | string
    amountMinor?: IntFilter<"SettlementTransfer"> | number
    settlement?: XOR<SettlementScalarRelationFilter, SettlementWhereInput>
  }

  export type SettlementTransferOrderByWithRelationInput = {
    id?: SortOrder
    settlementId?: SortOrder
    fromMemberId?: SortOrder
    toMemberId?: SortOrder
    amountMinor?: SortOrder
    settlement?: SettlementOrderByWithRelationInput
  }

  export type SettlementTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettlementTransferWhereInput | SettlementTransferWhereInput[]
    OR?: SettlementTransferWhereInput[]
    NOT?: SettlementTransferWhereInput | SettlementTransferWhereInput[]
    settlementId?: StringFilter<"SettlementTransfer"> | string
    fromMemberId?: StringFilter<"SettlementTransfer"> | string
    toMemberId?: StringFilter<"SettlementTransfer"> | string
    amountMinor?: IntFilter<"SettlementTransfer"> | number
    settlement?: XOR<SettlementScalarRelationFilter, SettlementWhereInput>
  }, "id">

  export type SettlementTransferOrderByWithAggregationInput = {
    id?: SortOrder
    settlementId?: SortOrder
    fromMemberId?: SortOrder
    toMemberId?: SortOrder
    amountMinor?: SortOrder
    _count?: SettlementTransferCountOrderByAggregateInput
    _avg?: SettlementTransferAvgOrderByAggregateInput
    _max?: SettlementTransferMaxOrderByAggregateInput
    _min?: SettlementTransferMinOrderByAggregateInput
    _sum?: SettlementTransferSumOrderByAggregateInput
  }

  export type SettlementTransferScalarWhereWithAggregatesInput = {
    AND?: SettlementTransferScalarWhereWithAggregatesInput | SettlementTransferScalarWhereWithAggregatesInput[]
    OR?: SettlementTransferScalarWhereWithAggregatesInput[]
    NOT?: SettlementTransferScalarWhereWithAggregatesInput | SettlementTransferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SettlementTransfer"> | string
    settlementId?: StringWithAggregatesFilter<"SettlementTransfer"> | string
    fromMemberId?: StringWithAggregatesFilter<"SettlementTransfer"> | string
    toMemberId?: StringWithAggregatesFilter<"SettlementTransfer"> | string
    amountMinor?: IntWithAggregatesFilter<"SettlementTransfer"> | number
  }

  export type LedgerCreateInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: LedgerMemberCreateNestedManyWithoutLedgerInput
    invites?: LedgerInviteCreateNestedManyWithoutLedgerInput
    expenses?: ExpenseCreateNestedManyWithoutLedgerInput
    auditEvents?: AuditEventCreateNestedManyWithoutLedgerInput
    settlements?: SettlementCreateNestedManyWithoutLedgerInput
  }

  export type LedgerUncheckedCreateInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: LedgerMemberUncheckedCreateNestedManyWithoutLedgerInput
    invites?: LedgerInviteUncheckedCreateNestedManyWithoutLedgerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutLedgerInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutLedgerInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutLedgerInput
  }

  export type LedgerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: LedgerMemberUpdateManyWithoutLedgerNestedInput
    invites?: LedgerInviteUpdateManyWithoutLedgerNestedInput
    expenses?: ExpenseUpdateManyWithoutLedgerNestedInput
    auditEvents?: AuditEventUpdateManyWithoutLedgerNestedInput
    settlements?: SettlementUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: LedgerMemberUncheckedUpdateManyWithoutLedgerNestedInput
    invites?: LedgerInviteUncheckedUpdateManyWithoutLedgerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutLedgerNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutLedgerNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerCreateManyInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LedgerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerMemberCreateInput = {
    id?: string
    clerkUserId: string
    role: $Enums.MemberRole
    createdAt?: Date | string
    ledger: LedgerCreateNestedOneWithoutMembersInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    shares?: ExpenseShareCreateNestedManyWithoutMemberInput
  }

  export type LedgerMemberUncheckedCreateInput = {
    id?: string
    ledgerId: string
    clerkUserId: string
    role: $Enums.MemberRole
    createdAt?: Date | string
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    shares?: ExpenseShareUncheckedCreateNestedManyWithoutMemberInput
  }

  export type LedgerMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledger?: LedgerUpdateOneRequiredWithoutMembersNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    shares?: ExpenseShareUpdateManyWithoutMemberNestedInput
  }

  export type LedgerMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    shares?: ExpenseShareUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type LedgerMemberCreateManyInput = {
    id?: string
    ledgerId: string
    clerkUserId: string
    role: $Enums.MemberRole
    createdAt?: Date | string
  }

  export type LedgerMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerInviteCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
    createdByClerkUserId: string
    ledger: LedgerCreateNestedOneWithoutInvitesInput
  }

  export type LedgerInviteUncheckedCreateInput = {
    id?: string
    ledgerId: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
    createdByClerkUserId: string
  }

  export type LedgerInviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    ledger?: LedgerUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type LedgerInviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
  }

  export type LedgerInviteCreateManyInput = {
    id?: string
    ledgerId: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
    createdByClerkUserId: string
  }

  export type LedgerInviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
  }

  export type LedgerInviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseCreateInput = {
    id?: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category?: $Enums.ExpenseCategory | null
    proofUrl?: string | null
    splitType?: $Enums.SplitType
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ledger: LedgerCreateNestedOneWithoutExpensesInput
    payer: LedgerMemberCreateNestedOneWithoutPaidExpensesInput
    shares?: ExpenseShareCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    ledgerId: string
    payerMemberId: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category?: $Enums.ExpenseCategory | null
    proofUrl?: string | null
    splitType?: $Enums.SplitType
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shares?: ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledger?: LedgerUpdateOneRequiredWithoutExpensesNestedInput
    payer?: LedgerMemberUpdateOneRequiredWithoutPaidExpensesNestedInput
    shares?: ExpenseShareUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    payerMemberId?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: ExpenseShareUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseCreateManyInput = {
    id?: string
    ledgerId: string
    payerMemberId: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category?: $Enums.ExpenseCategory | null
    proofUrl?: string | null
    splitType?: $Enums.SplitType
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    payerMemberId?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseShareCreateInput = {
    id?: string
    amountMinor: number
    createdAt?: Date | string
    expense: ExpenseCreateNestedOneWithoutSharesInput
    member: LedgerMemberCreateNestedOneWithoutSharesInput
  }

  export type ExpenseShareUncheckedCreateInput = {
    id?: string
    expenseId: string
    memberId: string
    amountMinor: number
    createdAt?: Date | string
  }

  export type ExpenseShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expense?: ExpenseUpdateOneRequiredWithoutSharesNestedInput
    member?: LedgerMemberUpdateOneRequiredWithoutSharesNestedInput
  }

  export type ExpenseShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseShareCreateManyInput = {
    id?: string
    expenseId: string
    memberId: string
    amountMinor: number
    createdAt?: Date | string
  }

  export type ExpenseShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateInput = {
    id?: string
    actorClerkUserId: string
    eventType: $Enums.AuditEventType
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
    ledger: LedgerCreateNestedOneWithoutAuditEventsInput
  }

  export type AuditEventUncheckedCreateInput = {
    id?: string
    ledgerId: string
    actorClerkUserId: string
    eventType: $Enums.AuditEventType
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type AuditEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorClerkUserId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledger?: LedgerUpdateOneRequiredWithoutAuditEventsNestedInput
  }

  export type AuditEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    actorClerkUserId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateManyInput = {
    id?: string
    ledgerId: string
    actorClerkUserId: string
    eventType: $Enums.AuditEventType
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type AuditEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorClerkUserId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    actorClerkUserId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementCreateInput = {
    id?: string
    sourceBalanceFingerprint: string
    status?: $Enums.SettlementStatus
    totalTransferredMinor: number
    transactionCount: number
    createdByClerkUserId: string
    createdAt?: Date | string
    completedByClerkUserId?: string | null
    completedAt?: Date | string | null
    ledger: LedgerCreateNestedOneWithoutSettlementsInput
    transfers?: SettlementTransferCreateNestedManyWithoutSettlementInput
  }

  export type SettlementUncheckedCreateInput = {
    id?: string
    ledgerId: string
    sourceBalanceFingerprint: string
    status?: $Enums.SettlementStatus
    totalTransferredMinor: number
    transactionCount: number
    createdByClerkUserId: string
    createdAt?: Date | string
    completedByClerkUserId?: string | null
    completedAt?: Date | string | null
    transfers?: SettlementTransferUncheckedCreateNestedManyWithoutSettlementInput
  }

  export type SettlementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceBalanceFingerprint?: StringFieldUpdateOperationsInput | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    totalTransferredMinor?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedByClerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledger?: LedgerUpdateOneRequiredWithoutSettlementsNestedInput
    transfers?: SettlementTransferUpdateManyWithoutSettlementNestedInput
  }

  export type SettlementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    sourceBalanceFingerprint?: StringFieldUpdateOperationsInput | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    totalTransferredMinor?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedByClerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transfers?: SettlementTransferUncheckedUpdateManyWithoutSettlementNestedInput
  }

  export type SettlementCreateManyInput = {
    id?: string
    ledgerId: string
    sourceBalanceFingerprint: string
    status?: $Enums.SettlementStatus
    totalTransferredMinor: number
    transactionCount: number
    createdByClerkUserId: string
    createdAt?: Date | string
    completedByClerkUserId?: string | null
    completedAt?: Date | string | null
  }

  export type SettlementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceBalanceFingerprint?: StringFieldUpdateOperationsInput | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    totalTransferredMinor?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedByClerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettlementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    sourceBalanceFingerprint?: StringFieldUpdateOperationsInput | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    totalTransferredMinor?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedByClerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettlementTransferCreateInput = {
    id?: string
    fromMemberId: string
    toMemberId: string
    amountMinor: number
    settlement: SettlementCreateNestedOneWithoutTransfersInput
  }

  export type SettlementTransferUncheckedCreateInput = {
    id?: string
    settlementId: string
    fromMemberId: string
    toMemberId: string
    amountMinor: number
  }

  export type SettlementTransferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromMemberId?: StringFieldUpdateOperationsInput | string
    toMemberId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    settlement?: SettlementUpdateOneRequiredWithoutTransfersNestedInput
  }

  export type SettlementTransferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    settlementId?: StringFieldUpdateOperationsInput | string
    fromMemberId?: StringFieldUpdateOperationsInput | string
    toMemberId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
  }

  export type SettlementTransferCreateManyInput = {
    id?: string
    settlementId: string
    fromMemberId: string
    toMemberId: string
    amountMinor: number
  }

  export type SettlementTransferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromMemberId?: StringFieldUpdateOperationsInput | string
    toMemberId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
  }

  export type SettlementTransferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    settlementId?: StringFieldUpdateOperationsInput | string
    fromMemberId?: StringFieldUpdateOperationsInput | string
    toMemberId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LedgerMemberListRelationFilter = {
    every?: LedgerMemberWhereInput
    some?: LedgerMemberWhereInput
    none?: LedgerMemberWhereInput
  }

  export type LedgerInviteListRelationFilter = {
    every?: LedgerInviteWhereInput
    some?: LedgerInviteWhereInput
    none?: LedgerInviteWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type AuditEventListRelationFilter = {
    every?: AuditEventWhereInput
    some?: AuditEventWhereInput
    none?: AuditEventWhereInput
  }

  export type SettlementListRelationFilter = {
    every?: SettlementWhereInput
    some?: SettlementWhereInput
    none?: SettlementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LedgerMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LedgerInviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettlementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LedgerCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LedgerMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole
  }

  export type LedgerScalarRelationFilter = {
    is?: LedgerWhereInput
    isNot?: LedgerWhereInput
  }

  export type ExpenseShareListRelationFilter = {
    every?: ExpenseShareWhereInput
    some?: ExpenseShareWhereInput
    none?: ExpenseShareWhereInput
  }

  export type ExpenseShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LedgerMemberLedgerIdClerkUserIdCompoundUniqueInput = {
    ledgerId: string
    clerkUserId: string
  }

  export type LedgerMemberCountOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    clerkUserId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    clerkUserId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerMemberMinOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    clerkUserId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumMemberRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LedgerInviteCountOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    createdByClerkUserId?: SortOrder
  }

  export type LedgerInviteMaxOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    createdByClerkUserId?: SortOrder
  }

  export type LedgerInviteMinOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    createdByClerkUserId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumExpenseCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExpenseCategoryNullableFilter<$PrismaModel> | $Enums.ExpenseCategory | null
  }

  export type EnumSplitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SplitType | EnumSplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSplitTypeFilter<$PrismaModel> | $Enums.SplitType
  }

  export type LedgerMemberScalarRelationFilter = {
    is?: LedgerMemberWhereInput
    isNot?: LedgerMemberWhereInput
  }

  export type ExpenseLedgerIdIdempotencyKeyCompoundUniqueInput = {
    ledgerId: string
    idempotencyKey: string
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    payerMemberId?: SortOrder
    createdByClerkUserId?: SortOrder
    amountMinor?: SortOrder
    description?: SortOrder
    category?: SortOrder
    proofUrl?: SortOrder
    splitType?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    payerMemberId?: SortOrder
    createdByClerkUserId?: SortOrder
    amountMinor?: SortOrder
    description?: SortOrder
    category?: SortOrder
    proofUrl?: SortOrder
    splitType?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    payerMemberId?: SortOrder
    createdByClerkUserId?: SortOrder
    amountMinor?: SortOrder
    description?: SortOrder
    category?: SortOrder
    proofUrl?: SortOrder
    splitType?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumExpenseCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExpenseCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExpenseCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumExpenseCategoryNullableFilter<$PrismaModel>
  }

  export type EnumSplitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SplitType | EnumSplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSplitTypeWithAggregatesFilter<$PrismaModel> | $Enums.SplitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSplitTypeFilter<$PrismaModel>
    _max?: NestedEnumSplitTypeFilter<$PrismaModel>
  }

  export type ExpenseScalarRelationFilter = {
    is?: ExpenseWhereInput
    isNot?: ExpenseWhereInput
  }

  export type ExpenseShareExpenseIdMemberIdCompoundUniqueInput = {
    expenseId: string
    memberId: string
  }

  export type ExpenseShareCountOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    memberId?: SortOrder
    amountMinor?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseShareAvgOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type ExpenseShareMaxOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    memberId?: SortOrder
    amountMinor?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseShareMinOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    memberId?: SortOrder
    amountMinor?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseShareSumOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type EnumAuditEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEventType | EnumAuditEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEventTypeFilter<$PrismaModel> | $Enums.AuditEventType
  }

  export type EnumAuditEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEntityTypeFilter<$PrismaModel> | $Enums.AuditEntityType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    actorClerkUserId?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
  }

  export type AuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    actorClerkUserId?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    occurredAt?: SortOrder
  }

  export type AuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    actorClerkUserId?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    occurredAt?: SortOrder
  }

  export type EnumAuditEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEventType | EnumAuditEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditEventTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditEventTypeFilter<$PrismaModel>
  }

  export type EnumAuditEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumSettlementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusFilter<$PrismaModel> | $Enums.SettlementStatus
  }

  export type SettlementTransferListRelationFilter = {
    every?: SettlementTransferWhereInput
    some?: SettlementTransferWhereInput
    none?: SettlementTransferWhereInput
  }

  export type SettlementTransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettlementCountOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    sourceBalanceFingerprint?: SortOrder
    status?: SortOrder
    totalTransferredMinor?: SortOrder
    transactionCount?: SortOrder
    createdByClerkUserId?: SortOrder
    createdAt?: SortOrder
    completedByClerkUserId?: SortOrder
    completedAt?: SortOrder
  }

  export type SettlementAvgOrderByAggregateInput = {
    totalTransferredMinor?: SortOrder
    transactionCount?: SortOrder
  }

  export type SettlementMaxOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    sourceBalanceFingerprint?: SortOrder
    status?: SortOrder
    totalTransferredMinor?: SortOrder
    transactionCount?: SortOrder
    createdByClerkUserId?: SortOrder
    createdAt?: SortOrder
    completedByClerkUserId?: SortOrder
    completedAt?: SortOrder
  }

  export type SettlementMinOrderByAggregateInput = {
    id?: SortOrder
    ledgerId?: SortOrder
    sourceBalanceFingerprint?: SortOrder
    status?: SortOrder
    totalTransferredMinor?: SortOrder
    transactionCount?: SortOrder
    createdByClerkUserId?: SortOrder
    createdAt?: SortOrder
    completedByClerkUserId?: SortOrder
    completedAt?: SortOrder
  }

  export type SettlementSumOrderByAggregateInput = {
    totalTransferredMinor?: SortOrder
    transactionCount?: SortOrder
  }

  export type EnumSettlementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusWithAggregatesFilter<$PrismaModel> | $Enums.SettlementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSettlementStatusFilter<$PrismaModel>
    _max?: NestedEnumSettlementStatusFilter<$PrismaModel>
  }

  export type SettlementScalarRelationFilter = {
    is?: SettlementWhereInput
    isNot?: SettlementWhereInput
  }

  export type SettlementTransferCountOrderByAggregateInput = {
    id?: SortOrder
    settlementId?: SortOrder
    fromMemberId?: SortOrder
    toMemberId?: SortOrder
    amountMinor?: SortOrder
  }

  export type SettlementTransferAvgOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type SettlementTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    settlementId?: SortOrder
    fromMemberId?: SortOrder
    toMemberId?: SortOrder
    amountMinor?: SortOrder
  }

  export type SettlementTransferMinOrderByAggregateInput = {
    id?: SortOrder
    settlementId?: SortOrder
    fromMemberId?: SortOrder
    toMemberId?: SortOrder
    amountMinor?: SortOrder
  }

  export type SettlementTransferSumOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type LedgerMemberCreateNestedManyWithoutLedgerInput = {
    create?: XOR<LedgerMemberCreateWithoutLedgerInput, LedgerMemberUncheckedCreateWithoutLedgerInput> | LedgerMemberCreateWithoutLedgerInput[] | LedgerMemberUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerMemberCreateOrConnectWithoutLedgerInput | LedgerMemberCreateOrConnectWithoutLedgerInput[]
    createMany?: LedgerMemberCreateManyLedgerInputEnvelope
    connect?: LedgerMemberWhereUniqueInput | LedgerMemberWhereUniqueInput[]
  }

  export type LedgerInviteCreateNestedManyWithoutLedgerInput = {
    create?: XOR<LedgerInviteCreateWithoutLedgerInput, LedgerInviteUncheckedCreateWithoutLedgerInput> | LedgerInviteCreateWithoutLedgerInput[] | LedgerInviteUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerInviteCreateOrConnectWithoutLedgerInput | LedgerInviteCreateOrConnectWithoutLedgerInput[]
    createMany?: LedgerInviteCreateManyLedgerInputEnvelope
    connect?: LedgerInviteWhereUniqueInput | LedgerInviteWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutLedgerInput = {
    create?: XOR<ExpenseCreateWithoutLedgerInput, ExpenseUncheckedCreateWithoutLedgerInput> | ExpenseCreateWithoutLedgerInput[] | ExpenseUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutLedgerInput | ExpenseCreateOrConnectWithoutLedgerInput[]
    createMany?: ExpenseCreateManyLedgerInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type AuditEventCreateNestedManyWithoutLedgerInput = {
    create?: XOR<AuditEventCreateWithoutLedgerInput, AuditEventUncheckedCreateWithoutLedgerInput> | AuditEventCreateWithoutLedgerInput[] | AuditEventUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutLedgerInput | AuditEventCreateOrConnectWithoutLedgerInput[]
    createMany?: AuditEventCreateManyLedgerInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type SettlementCreateNestedManyWithoutLedgerInput = {
    create?: XOR<SettlementCreateWithoutLedgerInput, SettlementUncheckedCreateWithoutLedgerInput> | SettlementCreateWithoutLedgerInput[] | SettlementUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutLedgerInput | SettlementCreateOrConnectWithoutLedgerInput[]
    createMany?: SettlementCreateManyLedgerInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type LedgerMemberUncheckedCreateNestedManyWithoutLedgerInput = {
    create?: XOR<LedgerMemberCreateWithoutLedgerInput, LedgerMemberUncheckedCreateWithoutLedgerInput> | LedgerMemberCreateWithoutLedgerInput[] | LedgerMemberUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerMemberCreateOrConnectWithoutLedgerInput | LedgerMemberCreateOrConnectWithoutLedgerInput[]
    createMany?: LedgerMemberCreateManyLedgerInputEnvelope
    connect?: LedgerMemberWhereUniqueInput | LedgerMemberWhereUniqueInput[]
  }

  export type LedgerInviteUncheckedCreateNestedManyWithoutLedgerInput = {
    create?: XOR<LedgerInviteCreateWithoutLedgerInput, LedgerInviteUncheckedCreateWithoutLedgerInput> | LedgerInviteCreateWithoutLedgerInput[] | LedgerInviteUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerInviteCreateOrConnectWithoutLedgerInput | LedgerInviteCreateOrConnectWithoutLedgerInput[]
    createMany?: LedgerInviteCreateManyLedgerInputEnvelope
    connect?: LedgerInviteWhereUniqueInput | LedgerInviteWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutLedgerInput = {
    create?: XOR<ExpenseCreateWithoutLedgerInput, ExpenseUncheckedCreateWithoutLedgerInput> | ExpenseCreateWithoutLedgerInput[] | ExpenseUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutLedgerInput | ExpenseCreateOrConnectWithoutLedgerInput[]
    createMany?: ExpenseCreateManyLedgerInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type AuditEventUncheckedCreateNestedManyWithoutLedgerInput = {
    create?: XOR<AuditEventCreateWithoutLedgerInput, AuditEventUncheckedCreateWithoutLedgerInput> | AuditEventCreateWithoutLedgerInput[] | AuditEventUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutLedgerInput | AuditEventCreateOrConnectWithoutLedgerInput[]
    createMany?: AuditEventCreateManyLedgerInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type SettlementUncheckedCreateNestedManyWithoutLedgerInput = {
    create?: XOR<SettlementCreateWithoutLedgerInput, SettlementUncheckedCreateWithoutLedgerInput> | SettlementCreateWithoutLedgerInput[] | SettlementUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutLedgerInput | SettlementCreateOrConnectWithoutLedgerInput[]
    createMany?: SettlementCreateManyLedgerInputEnvelope
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumLedgerTypeFieldUpdateOperationsInput = {
    set?: $Enums.LedgerType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LedgerMemberUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<LedgerMemberCreateWithoutLedgerInput, LedgerMemberUncheckedCreateWithoutLedgerInput> | LedgerMemberCreateWithoutLedgerInput[] | LedgerMemberUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerMemberCreateOrConnectWithoutLedgerInput | LedgerMemberCreateOrConnectWithoutLedgerInput[]
    upsert?: LedgerMemberUpsertWithWhereUniqueWithoutLedgerInput | LedgerMemberUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: LedgerMemberCreateManyLedgerInputEnvelope
    set?: LedgerMemberWhereUniqueInput | LedgerMemberWhereUniqueInput[]
    disconnect?: LedgerMemberWhereUniqueInput | LedgerMemberWhereUniqueInput[]
    delete?: LedgerMemberWhereUniqueInput | LedgerMemberWhereUniqueInput[]
    connect?: LedgerMemberWhereUniqueInput | LedgerMemberWhereUniqueInput[]
    update?: LedgerMemberUpdateWithWhereUniqueWithoutLedgerInput | LedgerMemberUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: LedgerMemberUpdateManyWithWhereWithoutLedgerInput | LedgerMemberUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: LedgerMemberScalarWhereInput | LedgerMemberScalarWhereInput[]
  }

  export type LedgerInviteUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<LedgerInviteCreateWithoutLedgerInput, LedgerInviteUncheckedCreateWithoutLedgerInput> | LedgerInviteCreateWithoutLedgerInput[] | LedgerInviteUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerInviteCreateOrConnectWithoutLedgerInput | LedgerInviteCreateOrConnectWithoutLedgerInput[]
    upsert?: LedgerInviteUpsertWithWhereUniqueWithoutLedgerInput | LedgerInviteUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: LedgerInviteCreateManyLedgerInputEnvelope
    set?: LedgerInviteWhereUniqueInput | LedgerInviteWhereUniqueInput[]
    disconnect?: LedgerInviteWhereUniqueInput | LedgerInviteWhereUniqueInput[]
    delete?: LedgerInviteWhereUniqueInput | LedgerInviteWhereUniqueInput[]
    connect?: LedgerInviteWhereUniqueInput | LedgerInviteWhereUniqueInput[]
    update?: LedgerInviteUpdateWithWhereUniqueWithoutLedgerInput | LedgerInviteUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: LedgerInviteUpdateManyWithWhereWithoutLedgerInput | LedgerInviteUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: LedgerInviteScalarWhereInput | LedgerInviteScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<ExpenseCreateWithoutLedgerInput, ExpenseUncheckedCreateWithoutLedgerInput> | ExpenseCreateWithoutLedgerInput[] | ExpenseUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutLedgerInput | ExpenseCreateOrConnectWithoutLedgerInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutLedgerInput | ExpenseUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: ExpenseCreateManyLedgerInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutLedgerInput | ExpenseUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutLedgerInput | ExpenseUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type AuditEventUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<AuditEventCreateWithoutLedgerInput, AuditEventUncheckedCreateWithoutLedgerInput> | AuditEventCreateWithoutLedgerInput[] | AuditEventUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutLedgerInput | AuditEventCreateOrConnectWithoutLedgerInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutLedgerInput | AuditEventUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: AuditEventCreateManyLedgerInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutLedgerInput | AuditEventUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutLedgerInput | AuditEventUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type SettlementUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<SettlementCreateWithoutLedgerInput, SettlementUncheckedCreateWithoutLedgerInput> | SettlementCreateWithoutLedgerInput[] | SettlementUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutLedgerInput | SettlementCreateOrConnectWithoutLedgerInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutLedgerInput | SettlementUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: SettlementCreateManyLedgerInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutLedgerInput | SettlementUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutLedgerInput | SettlementUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type LedgerMemberUncheckedUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<LedgerMemberCreateWithoutLedgerInput, LedgerMemberUncheckedCreateWithoutLedgerInput> | LedgerMemberCreateWithoutLedgerInput[] | LedgerMemberUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerMemberCreateOrConnectWithoutLedgerInput | LedgerMemberCreateOrConnectWithoutLedgerInput[]
    upsert?: LedgerMemberUpsertWithWhereUniqueWithoutLedgerInput | LedgerMemberUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: LedgerMemberCreateManyLedgerInputEnvelope
    set?: LedgerMemberWhereUniqueInput | LedgerMemberWhereUniqueInput[]
    disconnect?: LedgerMemberWhereUniqueInput | LedgerMemberWhereUniqueInput[]
    delete?: LedgerMemberWhereUniqueInput | LedgerMemberWhereUniqueInput[]
    connect?: LedgerMemberWhereUniqueInput | LedgerMemberWhereUniqueInput[]
    update?: LedgerMemberUpdateWithWhereUniqueWithoutLedgerInput | LedgerMemberUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: LedgerMemberUpdateManyWithWhereWithoutLedgerInput | LedgerMemberUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: LedgerMemberScalarWhereInput | LedgerMemberScalarWhereInput[]
  }

  export type LedgerInviteUncheckedUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<LedgerInviteCreateWithoutLedgerInput, LedgerInviteUncheckedCreateWithoutLedgerInput> | LedgerInviteCreateWithoutLedgerInput[] | LedgerInviteUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: LedgerInviteCreateOrConnectWithoutLedgerInput | LedgerInviteCreateOrConnectWithoutLedgerInput[]
    upsert?: LedgerInviteUpsertWithWhereUniqueWithoutLedgerInput | LedgerInviteUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: LedgerInviteCreateManyLedgerInputEnvelope
    set?: LedgerInviteWhereUniqueInput | LedgerInviteWhereUniqueInput[]
    disconnect?: LedgerInviteWhereUniqueInput | LedgerInviteWhereUniqueInput[]
    delete?: LedgerInviteWhereUniqueInput | LedgerInviteWhereUniqueInput[]
    connect?: LedgerInviteWhereUniqueInput | LedgerInviteWhereUniqueInput[]
    update?: LedgerInviteUpdateWithWhereUniqueWithoutLedgerInput | LedgerInviteUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: LedgerInviteUpdateManyWithWhereWithoutLedgerInput | LedgerInviteUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: LedgerInviteScalarWhereInput | LedgerInviteScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<ExpenseCreateWithoutLedgerInput, ExpenseUncheckedCreateWithoutLedgerInput> | ExpenseCreateWithoutLedgerInput[] | ExpenseUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutLedgerInput | ExpenseCreateOrConnectWithoutLedgerInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutLedgerInput | ExpenseUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: ExpenseCreateManyLedgerInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutLedgerInput | ExpenseUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutLedgerInput | ExpenseUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type AuditEventUncheckedUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<AuditEventCreateWithoutLedgerInput, AuditEventUncheckedCreateWithoutLedgerInput> | AuditEventCreateWithoutLedgerInput[] | AuditEventUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutLedgerInput | AuditEventCreateOrConnectWithoutLedgerInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutLedgerInput | AuditEventUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: AuditEventCreateManyLedgerInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutLedgerInput | AuditEventUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutLedgerInput | AuditEventUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type SettlementUncheckedUpdateManyWithoutLedgerNestedInput = {
    create?: XOR<SettlementCreateWithoutLedgerInput, SettlementUncheckedCreateWithoutLedgerInput> | SettlementCreateWithoutLedgerInput[] | SettlementUncheckedCreateWithoutLedgerInput[]
    connectOrCreate?: SettlementCreateOrConnectWithoutLedgerInput | SettlementCreateOrConnectWithoutLedgerInput[]
    upsert?: SettlementUpsertWithWhereUniqueWithoutLedgerInput | SettlementUpsertWithWhereUniqueWithoutLedgerInput[]
    createMany?: SettlementCreateManyLedgerInputEnvelope
    set?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    disconnect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    delete?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    connect?: SettlementWhereUniqueInput | SettlementWhereUniqueInput[]
    update?: SettlementUpdateWithWhereUniqueWithoutLedgerInput | SettlementUpdateWithWhereUniqueWithoutLedgerInput[]
    updateMany?: SettlementUpdateManyWithWhereWithoutLedgerInput | SettlementUpdateManyWithWhereWithoutLedgerInput[]
    deleteMany?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
  }

  export type LedgerCreateNestedOneWithoutMembersInput = {
    create?: XOR<LedgerCreateWithoutMembersInput, LedgerUncheckedCreateWithoutMembersInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutMembersInput
    connect?: LedgerWhereUniqueInput
  }

  export type ExpenseCreateNestedManyWithoutPayerInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseShareCreateNestedManyWithoutMemberInput = {
    create?: XOR<ExpenseShareCreateWithoutMemberInput, ExpenseShareUncheckedCreateWithoutMemberInput> | ExpenseShareCreateWithoutMemberInput[] | ExpenseShareUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ExpenseShareCreateOrConnectWithoutMemberInput | ExpenseShareCreateOrConnectWithoutMemberInput[]
    createMany?: ExpenseShareCreateManyMemberInputEnvelope
    connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutPayerInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseShareUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<ExpenseShareCreateWithoutMemberInput, ExpenseShareUncheckedCreateWithoutMemberInput> | ExpenseShareCreateWithoutMemberInput[] | ExpenseShareUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ExpenseShareCreateOrConnectWithoutMemberInput | ExpenseShareCreateOrConnectWithoutMemberInput[]
    createMany?: ExpenseShareCreateManyMemberInputEnvelope
    connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
  }

  export type EnumMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.MemberRole
  }

  export type LedgerUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<LedgerCreateWithoutMembersInput, LedgerUncheckedCreateWithoutMembersInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutMembersInput
    upsert?: LedgerUpsertWithoutMembersInput
    connect?: LedgerWhereUniqueInput
    update?: XOR<XOR<LedgerUpdateToOneWithWhereWithoutMembersInput, LedgerUpdateWithoutMembersInput>, LedgerUncheckedUpdateWithoutMembersInput>
  }

  export type ExpenseUpdateManyWithoutPayerNestedInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutPayerInput | ExpenseUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutPayerInput | ExpenseUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutPayerInput | ExpenseUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseShareUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ExpenseShareCreateWithoutMemberInput, ExpenseShareUncheckedCreateWithoutMemberInput> | ExpenseShareCreateWithoutMemberInput[] | ExpenseShareUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ExpenseShareCreateOrConnectWithoutMemberInput | ExpenseShareCreateOrConnectWithoutMemberInput[]
    upsert?: ExpenseShareUpsertWithWhereUniqueWithoutMemberInput | ExpenseShareUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ExpenseShareCreateManyMemberInputEnvelope
    set?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    disconnect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    delete?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    update?: ExpenseShareUpdateWithWhereUniqueWithoutMemberInput | ExpenseShareUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ExpenseShareUpdateManyWithWhereWithoutMemberInput | ExpenseShareUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutPayerNestedInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutPayerInput | ExpenseUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutPayerInput | ExpenseUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutPayerInput | ExpenseUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseShareUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ExpenseShareCreateWithoutMemberInput, ExpenseShareUncheckedCreateWithoutMemberInput> | ExpenseShareCreateWithoutMemberInput[] | ExpenseShareUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ExpenseShareCreateOrConnectWithoutMemberInput | ExpenseShareCreateOrConnectWithoutMemberInput[]
    upsert?: ExpenseShareUpsertWithWhereUniqueWithoutMemberInput | ExpenseShareUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ExpenseShareCreateManyMemberInputEnvelope
    set?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    disconnect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    delete?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    update?: ExpenseShareUpdateWithWhereUniqueWithoutMemberInput | ExpenseShareUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ExpenseShareUpdateManyWithWhereWithoutMemberInput | ExpenseShareUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
  }

  export type LedgerCreateNestedOneWithoutInvitesInput = {
    create?: XOR<LedgerCreateWithoutInvitesInput, LedgerUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutInvitesInput
    connect?: LedgerWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LedgerUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<LedgerCreateWithoutInvitesInput, LedgerUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutInvitesInput
    upsert?: LedgerUpsertWithoutInvitesInput
    connect?: LedgerWhereUniqueInput
    update?: XOR<XOR<LedgerUpdateToOneWithWhereWithoutInvitesInput, LedgerUpdateWithoutInvitesInput>, LedgerUncheckedUpdateWithoutInvitesInput>
  }

  export type LedgerCreateNestedOneWithoutExpensesInput = {
    create?: XOR<LedgerCreateWithoutExpensesInput, LedgerUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutExpensesInput
    connect?: LedgerWhereUniqueInput
  }

  export type LedgerMemberCreateNestedOneWithoutPaidExpensesInput = {
    create?: XOR<LedgerMemberCreateWithoutPaidExpensesInput, LedgerMemberUncheckedCreateWithoutPaidExpensesInput>
    connectOrCreate?: LedgerMemberCreateOrConnectWithoutPaidExpensesInput
    connect?: LedgerMemberWhereUniqueInput
  }

  export type ExpenseShareCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput> | ExpenseShareCreateWithoutExpenseInput[] | ExpenseShareUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseShareCreateOrConnectWithoutExpenseInput | ExpenseShareCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseShareCreateManyExpenseInputEnvelope
    connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
  }

  export type ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput> | ExpenseShareCreateWithoutExpenseInput[] | ExpenseShareUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseShareCreateOrConnectWithoutExpenseInput | ExpenseShareCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseShareCreateManyExpenseInputEnvelope
    connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumExpenseCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseCategory | null
  }

  export type EnumSplitTypeFieldUpdateOperationsInput = {
    set?: $Enums.SplitType
  }

  export type LedgerUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<LedgerCreateWithoutExpensesInput, LedgerUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutExpensesInput
    upsert?: LedgerUpsertWithoutExpensesInput
    connect?: LedgerWhereUniqueInput
    update?: XOR<XOR<LedgerUpdateToOneWithWhereWithoutExpensesInput, LedgerUpdateWithoutExpensesInput>, LedgerUncheckedUpdateWithoutExpensesInput>
  }

  export type LedgerMemberUpdateOneRequiredWithoutPaidExpensesNestedInput = {
    create?: XOR<LedgerMemberCreateWithoutPaidExpensesInput, LedgerMemberUncheckedCreateWithoutPaidExpensesInput>
    connectOrCreate?: LedgerMemberCreateOrConnectWithoutPaidExpensesInput
    upsert?: LedgerMemberUpsertWithoutPaidExpensesInput
    connect?: LedgerMemberWhereUniqueInput
    update?: XOR<XOR<LedgerMemberUpdateToOneWithWhereWithoutPaidExpensesInput, LedgerMemberUpdateWithoutPaidExpensesInput>, LedgerMemberUncheckedUpdateWithoutPaidExpensesInput>
  }

  export type ExpenseShareUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput> | ExpenseShareCreateWithoutExpenseInput[] | ExpenseShareUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseShareCreateOrConnectWithoutExpenseInput | ExpenseShareCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput | ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseShareCreateManyExpenseInputEnvelope
    set?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    disconnect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    delete?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    update?: ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput | ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseShareUpdateManyWithWhereWithoutExpenseInput | ExpenseShareUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
  }

  export type ExpenseShareUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput> | ExpenseShareCreateWithoutExpenseInput[] | ExpenseShareUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseShareCreateOrConnectWithoutExpenseInput | ExpenseShareCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput | ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseShareCreateManyExpenseInputEnvelope
    set?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    disconnect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    delete?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    connect?: ExpenseShareWhereUniqueInput | ExpenseShareWhereUniqueInput[]
    update?: ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput | ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseShareUpdateManyWithWhereWithoutExpenseInput | ExpenseShareUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
  }

  export type ExpenseCreateNestedOneWithoutSharesInput = {
    create?: XOR<ExpenseCreateWithoutSharesInput, ExpenseUncheckedCreateWithoutSharesInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutSharesInput
    connect?: ExpenseWhereUniqueInput
  }

  export type LedgerMemberCreateNestedOneWithoutSharesInput = {
    create?: XOR<LedgerMemberCreateWithoutSharesInput, LedgerMemberUncheckedCreateWithoutSharesInput>
    connectOrCreate?: LedgerMemberCreateOrConnectWithoutSharesInput
    connect?: LedgerMemberWhereUniqueInput
  }

  export type ExpenseUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<ExpenseCreateWithoutSharesInput, ExpenseUncheckedCreateWithoutSharesInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutSharesInput
    upsert?: ExpenseUpsertWithoutSharesInput
    connect?: ExpenseWhereUniqueInput
    update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutSharesInput, ExpenseUpdateWithoutSharesInput>, ExpenseUncheckedUpdateWithoutSharesInput>
  }

  export type LedgerMemberUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<LedgerMemberCreateWithoutSharesInput, LedgerMemberUncheckedCreateWithoutSharesInput>
    connectOrCreate?: LedgerMemberCreateOrConnectWithoutSharesInput
    upsert?: LedgerMemberUpsertWithoutSharesInput
    connect?: LedgerMemberWhereUniqueInput
    update?: XOR<XOR<LedgerMemberUpdateToOneWithWhereWithoutSharesInput, LedgerMemberUpdateWithoutSharesInput>, LedgerMemberUncheckedUpdateWithoutSharesInput>
  }

  export type LedgerCreateNestedOneWithoutAuditEventsInput = {
    create?: XOR<LedgerCreateWithoutAuditEventsInput, LedgerUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutAuditEventsInput
    connect?: LedgerWhereUniqueInput
  }

  export type EnumAuditEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuditEventType
  }

  export type EnumAuditEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuditEntityType
  }

  export type LedgerUpdateOneRequiredWithoutAuditEventsNestedInput = {
    create?: XOR<LedgerCreateWithoutAuditEventsInput, LedgerUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutAuditEventsInput
    upsert?: LedgerUpsertWithoutAuditEventsInput
    connect?: LedgerWhereUniqueInput
    update?: XOR<XOR<LedgerUpdateToOneWithWhereWithoutAuditEventsInput, LedgerUpdateWithoutAuditEventsInput>, LedgerUncheckedUpdateWithoutAuditEventsInput>
  }

  export type LedgerCreateNestedOneWithoutSettlementsInput = {
    create?: XOR<LedgerCreateWithoutSettlementsInput, LedgerUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutSettlementsInput
    connect?: LedgerWhereUniqueInput
  }

  export type SettlementTransferCreateNestedManyWithoutSettlementInput = {
    create?: XOR<SettlementTransferCreateWithoutSettlementInput, SettlementTransferUncheckedCreateWithoutSettlementInput> | SettlementTransferCreateWithoutSettlementInput[] | SettlementTransferUncheckedCreateWithoutSettlementInput[]
    connectOrCreate?: SettlementTransferCreateOrConnectWithoutSettlementInput | SettlementTransferCreateOrConnectWithoutSettlementInput[]
    createMany?: SettlementTransferCreateManySettlementInputEnvelope
    connect?: SettlementTransferWhereUniqueInput | SettlementTransferWhereUniqueInput[]
  }

  export type SettlementTransferUncheckedCreateNestedManyWithoutSettlementInput = {
    create?: XOR<SettlementTransferCreateWithoutSettlementInput, SettlementTransferUncheckedCreateWithoutSettlementInput> | SettlementTransferCreateWithoutSettlementInput[] | SettlementTransferUncheckedCreateWithoutSettlementInput[]
    connectOrCreate?: SettlementTransferCreateOrConnectWithoutSettlementInput | SettlementTransferCreateOrConnectWithoutSettlementInput[]
    createMany?: SettlementTransferCreateManySettlementInputEnvelope
    connect?: SettlementTransferWhereUniqueInput | SettlementTransferWhereUniqueInput[]
  }

  export type EnumSettlementStatusFieldUpdateOperationsInput = {
    set?: $Enums.SettlementStatus
  }

  export type LedgerUpdateOneRequiredWithoutSettlementsNestedInput = {
    create?: XOR<LedgerCreateWithoutSettlementsInput, LedgerUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: LedgerCreateOrConnectWithoutSettlementsInput
    upsert?: LedgerUpsertWithoutSettlementsInput
    connect?: LedgerWhereUniqueInput
    update?: XOR<XOR<LedgerUpdateToOneWithWhereWithoutSettlementsInput, LedgerUpdateWithoutSettlementsInput>, LedgerUncheckedUpdateWithoutSettlementsInput>
  }

  export type SettlementTransferUpdateManyWithoutSettlementNestedInput = {
    create?: XOR<SettlementTransferCreateWithoutSettlementInput, SettlementTransferUncheckedCreateWithoutSettlementInput> | SettlementTransferCreateWithoutSettlementInput[] | SettlementTransferUncheckedCreateWithoutSettlementInput[]
    connectOrCreate?: SettlementTransferCreateOrConnectWithoutSettlementInput | SettlementTransferCreateOrConnectWithoutSettlementInput[]
    upsert?: SettlementTransferUpsertWithWhereUniqueWithoutSettlementInput | SettlementTransferUpsertWithWhereUniqueWithoutSettlementInput[]
    createMany?: SettlementTransferCreateManySettlementInputEnvelope
    set?: SettlementTransferWhereUniqueInput | SettlementTransferWhereUniqueInput[]
    disconnect?: SettlementTransferWhereUniqueInput | SettlementTransferWhereUniqueInput[]
    delete?: SettlementTransferWhereUniqueInput | SettlementTransferWhereUniqueInput[]
    connect?: SettlementTransferWhereUniqueInput | SettlementTransferWhereUniqueInput[]
    update?: SettlementTransferUpdateWithWhereUniqueWithoutSettlementInput | SettlementTransferUpdateWithWhereUniqueWithoutSettlementInput[]
    updateMany?: SettlementTransferUpdateManyWithWhereWithoutSettlementInput | SettlementTransferUpdateManyWithWhereWithoutSettlementInput[]
    deleteMany?: SettlementTransferScalarWhereInput | SettlementTransferScalarWhereInput[]
  }

  export type SettlementTransferUncheckedUpdateManyWithoutSettlementNestedInput = {
    create?: XOR<SettlementTransferCreateWithoutSettlementInput, SettlementTransferUncheckedCreateWithoutSettlementInput> | SettlementTransferCreateWithoutSettlementInput[] | SettlementTransferUncheckedCreateWithoutSettlementInput[]
    connectOrCreate?: SettlementTransferCreateOrConnectWithoutSettlementInput | SettlementTransferCreateOrConnectWithoutSettlementInput[]
    upsert?: SettlementTransferUpsertWithWhereUniqueWithoutSettlementInput | SettlementTransferUpsertWithWhereUniqueWithoutSettlementInput[]
    createMany?: SettlementTransferCreateManySettlementInputEnvelope
    set?: SettlementTransferWhereUniqueInput | SettlementTransferWhereUniqueInput[]
    disconnect?: SettlementTransferWhereUniqueInput | SettlementTransferWhereUniqueInput[]
    delete?: SettlementTransferWhereUniqueInput | SettlementTransferWhereUniqueInput[]
    connect?: SettlementTransferWhereUniqueInput | SettlementTransferWhereUniqueInput[]
    update?: SettlementTransferUpdateWithWhereUniqueWithoutSettlementInput | SettlementTransferUpdateWithWhereUniqueWithoutSettlementInput[]
    updateMany?: SettlementTransferUpdateManyWithWhereWithoutSettlementInput | SettlementTransferUpdateManyWithWhereWithoutSettlementInput[]
    deleteMany?: SettlementTransferScalarWhereInput | SettlementTransferScalarWhereInput[]
  }

  export type SettlementCreateNestedOneWithoutTransfersInput = {
    create?: XOR<SettlementCreateWithoutTransfersInput, SettlementUncheckedCreateWithoutTransfersInput>
    connectOrCreate?: SettlementCreateOrConnectWithoutTransfersInput
    connect?: SettlementWhereUniqueInput
  }

  export type SettlementUpdateOneRequiredWithoutTransfersNestedInput = {
    create?: XOR<SettlementCreateWithoutTransfersInput, SettlementUncheckedCreateWithoutTransfersInput>
    connectOrCreate?: SettlementCreateOrConnectWithoutTransfersInput
    upsert?: SettlementUpsertWithoutTransfersInput
    connect?: SettlementWhereUniqueInput
    update?: XOR<XOR<SettlementUpdateToOneWithWhereWithoutTransfersInput, SettlementUpdateWithoutTransfersInput>, SettlementUncheckedUpdateWithoutTransfersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole
  }

  export type NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumMemberRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumExpenseCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExpenseCategoryNullableFilter<$PrismaModel> | $Enums.ExpenseCategory | null
  }

  export type NestedEnumSplitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SplitType | EnumSplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSplitTypeFilter<$PrismaModel> | $Enums.SplitType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumExpenseCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | EnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExpenseCategory[] | ListEnumExpenseCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExpenseCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExpenseCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumExpenseCategoryNullableFilter<$PrismaModel>
  }

  export type NestedEnumSplitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SplitType | EnumSplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SplitType[] | ListEnumSplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSplitTypeWithAggregatesFilter<$PrismaModel> | $Enums.SplitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSplitTypeFilter<$PrismaModel>
    _max?: NestedEnumSplitTypeFilter<$PrismaModel>
  }

  export type NestedEnumAuditEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEventType | EnumAuditEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEventTypeFilter<$PrismaModel> | $Enums.AuditEventType
  }

  export type NestedEnumAuditEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEntityTypeFilter<$PrismaModel> | $Enums.AuditEntityType
  }

  export type NestedEnumAuditEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEventType | EnumAuditEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEventType[] | ListEnumAuditEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditEventTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumAuditEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditEntityType[] | ListEnumAuditEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSettlementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusFilter<$PrismaModel> | $Enums.SettlementStatus
  }

  export type NestedEnumSettlementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusWithAggregatesFilter<$PrismaModel> | $Enums.SettlementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSettlementStatusFilter<$PrismaModel>
    _max?: NestedEnumSettlementStatusFilter<$PrismaModel>
  }

  export type LedgerMemberCreateWithoutLedgerInput = {
    id?: string
    clerkUserId: string
    role: $Enums.MemberRole
    createdAt?: Date | string
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    shares?: ExpenseShareCreateNestedManyWithoutMemberInput
  }

  export type LedgerMemberUncheckedCreateWithoutLedgerInput = {
    id?: string
    clerkUserId: string
    role: $Enums.MemberRole
    createdAt?: Date | string
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    shares?: ExpenseShareUncheckedCreateNestedManyWithoutMemberInput
  }

  export type LedgerMemberCreateOrConnectWithoutLedgerInput = {
    where: LedgerMemberWhereUniqueInput
    create: XOR<LedgerMemberCreateWithoutLedgerInput, LedgerMemberUncheckedCreateWithoutLedgerInput>
  }

  export type LedgerMemberCreateManyLedgerInputEnvelope = {
    data: LedgerMemberCreateManyLedgerInput | LedgerMemberCreateManyLedgerInput[]
    skipDuplicates?: boolean
  }

  export type LedgerInviteCreateWithoutLedgerInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
    createdByClerkUserId: string
  }

  export type LedgerInviteUncheckedCreateWithoutLedgerInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
    createdByClerkUserId: string
  }

  export type LedgerInviteCreateOrConnectWithoutLedgerInput = {
    where: LedgerInviteWhereUniqueInput
    create: XOR<LedgerInviteCreateWithoutLedgerInput, LedgerInviteUncheckedCreateWithoutLedgerInput>
  }

  export type LedgerInviteCreateManyLedgerInputEnvelope = {
    data: LedgerInviteCreateManyLedgerInput | LedgerInviteCreateManyLedgerInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutLedgerInput = {
    id?: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category?: $Enums.ExpenseCategory | null
    proofUrl?: string | null
    splitType?: $Enums.SplitType
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payer: LedgerMemberCreateNestedOneWithoutPaidExpensesInput
    shares?: ExpenseShareCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutLedgerInput = {
    id?: string
    payerMemberId: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category?: $Enums.ExpenseCategory | null
    proofUrl?: string | null
    splitType?: $Enums.SplitType
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shares?: ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutLedgerInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutLedgerInput, ExpenseUncheckedCreateWithoutLedgerInput>
  }

  export type ExpenseCreateManyLedgerInputEnvelope = {
    data: ExpenseCreateManyLedgerInput | ExpenseCreateManyLedgerInput[]
    skipDuplicates?: boolean
  }

  export type AuditEventCreateWithoutLedgerInput = {
    id?: string
    actorClerkUserId: string
    eventType: $Enums.AuditEventType
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type AuditEventUncheckedCreateWithoutLedgerInput = {
    id?: string
    actorClerkUserId: string
    eventType: $Enums.AuditEventType
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type AuditEventCreateOrConnectWithoutLedgerInput = {
    where: AuditEventWhereUniqueInput
    create: XOR<AuditEventCreateWithoutLedgerInput, AuditEventUncheckedCreateWithoutLedgerInput>
  }

  export type AuditEventCreateManyLedgerInputEnvelope = {
    data: AuditEventCreateManyLedgerInput | AuditEventCreateManyLedgerInput[]
    skipDuplicates?: boolean
  }

  export type SettlementCreateWithoutLedgerInput = {
    id?: string
    sourceBalanceFingerprint: string
    status?: $Enums.SettlementStatus
    totalTransferredMinor: number
    transactionCount: number
    createdByClerkUserId: string
    createdAt?: Date | string
    completedByClerkUserId?: string | null
    completedAt?: Date | string | null
    transfers?: SettlementTransferCreateNestedManyWithoutSettlementInput
  }

  export type SettlementUncheckedCreateWithoutLedgerInput = {
    id?: string
    sourceBalanceFingerprint: string
    status?: $Enums.SettlementStatus
    totalTransferredMinor: number
    transactionCount: number
    createdByClerkUserId: string
    createdAt?: Date | string
    completedByClerkUserId?: string | null
    completedAt?: Date | string | null
    transfers?: SettlementTransferUncheckedCreateNestedManyWithoutSettlementInput
  }

  export type SettlementCreateOrConnectWithoutLedgerInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutLedgerInput, SettlementUncheckedCreateWithoutLedgerInput>
  }

  export type SettlementCreateManyLedgerInputEnvelope = {
    data: SettlementCreateManyLedgerInput | SettlementCreateManyLedgerInput[]
    skipDuplicates?: boolean
  }

  export type LedgerMemberUpsertWithWhereUniqueWithoutLedgerInput = {
    where: LedgerMemberWhereUniqueInput
    update: XOR<LedgerMemberUpdateWithoutLedgerInput, LedgerMemberUncheckedUpdateWithoutLedgerInput>
    create: XOR<LedgerMemberCreateWithoutLedgerInput, LedgerMemberUncheckedCreateWithoutLedgerInput>
  }

  export type LedgerMemberUpdateWithWhereUniqueWithoutLedgerInput = {
    where: LedgerMemberWhereUniqueInput
    data: XOR<LedgerMemberUpdateWithoutLedgerInput, LedgerMemberUncheckedUpdateWithoutLedgerInput>
  }

  export type LedgerMemberUpdateManyWithWhereWithoutLedgerInput = {
    where: LedgerMemberScalarWhereInput
    data: XOR<LedgerMemberUpdateManyMutationInput, LedgerMemberUncheckedUpdateManyWithoutLedgerInput>
  }

  export type LedgerMemberScalarWhereInput = {
    AND?: LedgerMemberScalarWhereInput | LedgerMemberScalarWhereInput[]
    OR?: LedgerMemberScalarWhereInput[]
    NOT?: LedgerMemberScalarWhereInput | LedgerMemberScalarWhereInput[]
    id?: StringFilter<"LedgerMember"> | string
    ledgerId?: StringFilter<"LedgerMember"> | string
    clerkUserId?: StringFilter<"LedgerMember"> | string
    role?: EnumMemberRoleFilter<"LedgerMember"> | $Enums.MemberRole
    createdAt?: DateTimeFilter<"LedgerMember"> | Date | string
  }

  export type LedgerInviteUpsertWithWhereUniqueWithoutLedgerInput = {
    where: LedgerInviteWhereUniqueInput
    update: XOR<LedgerInviteUpdateWithoutLedgerInput, LedgerInviteUncheckedUpdateWithoutLedgerInput>
    create: XOR<LedgerInviteCreateWithoutLedgerInput, LedgerInviteUncheckedCreateWithoutLedgerInput>
  }

  export type LedgerInviteUpdateWithWhereUniqueWithoutLedgerInput = {
    where: LedgerInviteWhereUniqueInput
    data: XOR<LedgerInviteUpdateWithoutLedgerInput, LedgerInviteUncheckedUpdateWithoutLedgerInput>
  }

  export type LedgerInviteUpdateManyWithWhereWithoutLedgerInput = {
    where: LedgerInviteScalarWhereInput
    data: XOR<LedgerInviteUpdateManyMutationInput, LedgerInviteUncheckedUpdateManyWithoutLedgerInput>
  }

  export type LedgerInviteScalarWhereInput = {
    AND?: LedgerInviteScalarWhereInput | LedgerInviteScalarWhereInput[]
    OR?: LedgerInviteScalarWhereInput[]
    NOT?: LedgerInviteScalarWhereInput | LedgerInviteScalarWhereInput[]
    id?: StringFilter<"LedgerInvite"> | string
    ledgerId?: StringFilter<"LedgerInvite"> | string
    tokenHash?: StringFilter<"LedgerInvite"> | string
    expiresAt?: DateTimeFilter<"LedgerInvite"> | Date | string
    revokedAt?: DateTimeNullableFilter<"LedgerInvite"> | Date | string | null
    createdAt?: DateTimeFilter<"LedgerInvite"> | Date | string
    createdByClerkUserId?: StringFilter<"LedgerInvite"> | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutLedgerInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutLedgerInput, ExpenseUncheckedUpdateWithoutLedgerInput>
    create: XOR<ExpenseCreateWithoutLedgerInput, ExpenseUncheckedCreateWithoutLedgerInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutLedgerInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutLedgerInput, ExpenseUncheckedUpdateWithoutLedgerInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutLedgerInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutLedgerInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    ledgerId?: StringFilter<"Expense"> | string
    payerMemberId?: StringFilter<"Expense"> | string
    createdByClerkUserId?: StringFilter<"Expense"> | string
    amountMinor?: IntFilter<"Expense"> | number
    description?: StringFilter<"Expense"> | string
    category?: EnumExpenseCategoryNullableFilter<"Expense"> | $Enums.ExpenseCategory | null
    proofUrl?: StringNullableFilter<"Expense"> | string | null
    splitType?: EnumSplitTypeFilter<"Expense"> | $Enums.SplitType
    idempotencyKey?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type AuditEventUpsertWithWhereUniqueWithoutLedgerInput = {
    where: AuditEventWhereUniqueInput
    update: XOR<AuditEventUpdateWithoutLedgerInput, AuditEventUncheckedUpdateWithoutLedgerInput>
    create: XOR<AuditEventCreateWithoutLedgerInput, AuditEventUncheckedCreateWithoutLedgerInput>
  }

  export type AuditEventUpdateWithWhereUniqueWithoutLedgerInput = {
    where: AuditEventWhereUniqueInput
    data: XOR<AuditEventUpdateWithoutLedgerInput, AuditEventUncheckedUpdateWithoutLedgerInput>
  }

  export type AuditEventUpdateManyWithWhereWithoutLedgerInput = {
    where: AuditEventScalarWhereInput
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyWithoutLedgerInput>
  }

  export type AuditEventScalarWhereInput = {
    AND?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
    OR?: AuditEventScalarWhereInput[]
    NOT?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
    id?: StringFilter<"AuditEvent"> | string
    ledgerId?: StringFilter<"AuditEvent"> | string
    actorClerkUserId?: StringFilter<"AuditEvent"> | string
    eventType?: EnumAuditEventTypeFilter<"AuditEvent"> | $Enums.AuditEventType
    entityType?: EnumAuditEntityTypeFilter<"AuditEvent"> | $Enums.AuditEntityType
    entityId?: StringNullableFilter<"AuditEvent"> | string | null
    payload?: JsonFilter<"AuditEvent">
    occurredAt?: DateTimeFilter<"AuditEvent"> | Date | string
  }

  export type SettlementUpsertWithWhereUniqueWithoutLedgerInput = {
    where: SettlementWhereUniqueInput
    update: XOR<SettlementUpdateWithoutLedgerInput, SettlementUncheckedUpdateWithoutLedgerInput>
    create: XOR<SettlementCreateWithoutLedgerInput, SettlementUncheckedCreateWithoutLedgerInput>
  }

  export type SettlementUpdateWithWhereUniqueWithoutLedgerInput = {
    where: SettlementWhereUniqueInput
    data: XOR<SettlementUpdateWithoutLedgerInput, SettlementUncheckedUpdateWithoutLedgerInput>
  }

  export type SettlementUpdateManyWithWhereWithoutLedgerInput = {
    where: SettlementScalarWhereInput
    data: XOR<SettlementUpdateManyMutationInput, SettlementUncheckedUpdateManyWithoutLedgerInput>
  }

  export type SettlementScalarWhereInput = {
    AND?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
    OR?: SettlementScalarWhereInput[]
    NOT?: SettlementScalarWhereInput | SettlementScalarWhereInput[]
    id?: StringFilter<"Settlement"> | string
    ledgerId?: StringFilter<"Settlement"> | string
    sourceBalanceFingerprint?: StringFilter<"Settlement"> | string
    status?: EnumSettlementStatusFilter<"Settlement"> | $Enums.SettlementStatus
    totalTransferredMinor?: IntFilter<"Settlement"> | number
    transactionCount?: IntFilter<"Settlement"> | number
    createdByClerkUserId?: StringFilter<"Settlement"> | string
    createdAt?: DateTimeFilter<"Settlement"> | Date | string
    completedByClerkUserId?: StringNullableFilter<"Settlement"> | string | null
    completedAt?: DateTimeNullableFilter<"Settlement"> | Date | string | null
  }

  export type LedgerCreateWithoutMembersInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    invites?: LedgerInviteCreateNestedManyWithoutLedgerInput
    expenses?: ExpenseCreateNestedManyWithoutLedgerInput
    auditEvents?: AuditEventCreateNestedManyWithoutLedgerInput
    settlements?: SettlementCreateNestedManyWithoutLedgerInput
  }

  export type LedgerUncheckedCreateWithoutMembersInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    invites?: LedgerInviteUncheckedCreateNestedManyWithoutLedgerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutLedgerInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutLedgerInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutLedgerInput
  }

  export type LedgerCreateOrConnectWithoutMembersInput = {
    where: LedgerWhereUniqueInput
    create: XOR<LedgerCreateWithoutMembersInput, LedgerUncheckedCreateWithoutMembersInput>
  }

  export type ExpenseCreateWithoutPayerInput = {
    id?: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category?: $Enums.ExpenseCategory | null
    proofUrl?: string | null
    splitType?: $Enums.SplitType
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ledger: LedgerCreateNestedOneWithoutExpensesInput
    shares?: ExpenseShareCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutPayerInput = {
    id?: string
    ledgerId: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category?: $Enums.ExpenseCategory | null
    proofUrl?: string | null
    splitType?: $Enums.SplitType
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shares?: ExpenseShareUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutPayerInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput>
  }

  export type ExpenseCreateManyPayerInputEnvelope = {
    data: ExpenseCreateManyPayerInput | ExpenseCreateManyPayerInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseShareCreateWithoutMemberInput = {
    id?: string
    amountMinor: number
    createdAt?: Date | string
    expense: ExpenseCreateNestedOneWithoutSharesInput
  }

  export type ExpenseShareUncheckedCreateWithoutMemberInput = {
    id?: string
    expenseId: string
    amountMinor: number
    createdAt?: Date | string
  }

  export type ExpenseShareCreateOrConnectWithoutMemberInput = {
    where: ExpenseShareWhereUniqueInput
    create: XOR<ExpenseShareCreateWithoutMemberInput, ExpenseShareUncheckedCreateWithoutMemberInput>
  }

  export type ExpenseShareCreateManyMemberInputEnvelope = {
    data: ExpenseShareCreateManyMemberInput | ExpenseShareCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type LedgerUpsertWithoutMembersInput = {
    update: XOR<LedgerUpdateWithoutMembersInput, LedgerUncheckedUpdateWithoutMembersInput>
    create: XOR<LedgerCreateWithoutMembersInput, LedgerUncheckedCreateWithoutMembersInput>
    where?: LedgerWhereInput
  }

  export type LedgerUpdateToOneWithWhereWithoutMembersInput = {
    where?: LedgerWhereInput
    data: XOR<LedgerUpdateWithoutMembersInput, LedgerUncheckedUpdateWithoutMembersInput>
  }

  export type LedgerUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: LedgerInviteUpdateManyWithoutLedgerNestedInput
    expenses?: ExpenseUpdateManyWithoutLedgerNestedInput
    auditEvents?: AuditEventUpdateManyWithoutLedgerNestedInput
    settlements?: SettlementUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: LedgerInviteUncheckedUpdateManyWithoutLedgerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutLedgerNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutLedgerNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutLedgerNestedInput
  }

  export type ExpenseUpsertWithWhereUniqueWithoutPayerInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutPayerInput, ExpenseUncheckedUpdateWithoutPayerInput>
    create: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutPayerInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutPayerInput, ExpenseUncheckedUpdateWithoutPayerInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutPayerInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutPayerInput>
  }

  export type ExpenseShareUpsertWithWhereUniqueWithoutMemberInput = {
    where: ExpenseShareWhereUniqueInput
    update: XOR<ExpenseShareUpdateWithoutMemberInput, ExpenseShareUncheckedUpdateWithoutMemberInput>
    create: XOR<ExpenseShareCreateWithoutMemberInput, ExpenseShareUncheckedCreateWithoutMemberInput>
  }

  export type ExpenseShareUpdateWithWhereUniqueWithoutMemberInput = {
    where: ExpenseShareWhereUniqueInput
    data: XOR<ExpenseShareUpdateWithoutMemberInput, ExpenseShareUncheckedUpdateWithoutMemberInput>
  }

  export type ExpenseShareUpdateManyWithWhereWithoutMemberInput = {
    where: ExpenseShareScalarWhereInput
    data: XOR<ExpenseShareUpdateManyMutationInput, ExpenseShareUncheckedUpdateManyWithoutMemberInput>
  }

  export type ExpenseShareScalarWhereInput = {
    AND?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
    OR?: ExpenseShareScalarWhereInput[]
    NOT?: ExpenseShareScalarWhereInput | ExpenseShareScalarWhereInput[]
    id?: StringFilter<"ExpenseShare"> | string
    expenseId?: StringFilter<"ExpenseShare"> | string
    memberId?: StringFilter<"ExpenseShare"> | string
    amountMinor?: IntFilter<"ExpenseShare"> | number
    createdAt?: DateTimeFilter<"ExpenseShare"> | Date | string
  }

  export type LedgerCreateWithoutInvitesInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: LedgerMemberCreateNestedManyWithoutLedgerInput
    expenses?: ExpenseCreateNestedManyWithoutLedgerInput
    auditEvents?: AuditEventCreateNestedManyWithoutLedgerInput
    settlements?: SettlementCreateNestedManyWithoutLedgerInput
  }

  export type LedgerUncheckedCreateWithoutInvitesInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: LedgerMemberUncheckedCreateNestedManyWithoutLedgerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutLedgerInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutLedgerInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutLedgerInput
  }

  export type LedgerCreateOrConnectWithoutInvitesInput = {
    where: LedgerWhereUniqueInput
    create: XOR<LedgerCreateWithoutInvitesInput, LedgerUncheckedCreateWithoutInvitesInput>
  }

  export type LedgerUpsertWithoutInvitesInput = {
    update: XOR<LedgerUpdateWithoutInvitesInput, LedgerUncheckedUpdateWithoutInvitesInput>
    create: XOR<LedgerCreateWithoutInvitesInput, LedgerUncheckedCreateWithoutInvitesInput>
    where?: LedgerWhereInput
  }

  export type LedgerUpdateToOneWithWhereWithoutInvitesInput = {
    where?: LedgerWhereInput
    data: XOR<LedgerUpdateWithoutInvitesInput, LedgerUncheckedUpdateWithoutInvitesInput>
  }

  export type LedgerUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: LedgerMemberUpdateManyWithoutLedgerNestedInput
    expenses?: ExpenseUpdateManyWithoutLedgerNestedInput
    auditEvents?: AuditEventUpdateManyWithoutLedgerNestedInput
    settlements?: SettlementUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: LedgerMemberUncheckedUpdateManyWithoutLedgerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutLedgerNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutLedgerNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerCreateWithoutExpensesInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: LedgerMemberCreateNestedManyWithoutLedgerInput
    invites?: LedgerInviteCreateNestedManyWithoutLedgerInput
    auditEvents?: AuditEventCreateNestedManyWithoutLedgerInput
    settlements?: SettlementCreateNestedManyWithoutLedgerInput
  }

  export type LedgerUncheckedCreateWithoutExpensesInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: LedgerMemberUncheckedCreateNestedManyWithoutLedgerInput
    invites?: LedgerInviteUncheckedCreateNestedManyWithoutLedgerInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutLedgerInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutLedgerInput
  }

  export type LedgerCreateOrConnectWithoutExpensesInput = {
    where: LedgerWhereUniqueInput
    create: XOR<LedgerCreateWithoutExpensesInput, LedgerUncheckedCreateWithoutExpensesInput>
  }

  export type LedgerMemberCreateWithoutPaidExpensesInput = {
    id?: string
    clerkUserId: string
    role: $Enums.MemberRole
    createdAt?: Date | string
    ledger: LedgerCreateNestedOneWithoutMembersInput
    shares?: ExpenseShareCreateNestedManyWithoutMemberInput
  }

  export type LedgerMemberUncheckedCreateWithoutPaidExpensesInput = {
    id?: string
    ledgerId: string
    clerkUserId: string
    role: $Enums.MemberRole
    createdAt?: Date | string
    shares?: ExpenseShareUncheckedCreateNestedManyWithoutMemberInput
  }

  export type LedgerMemberCreateOrConnectWithoutPaidExpensesInput = {
    where: LedgerMemberWhereUniqueInput
    create: XOR<LedgerMemberCreateWithoutPaidExpensesInput, LedgerMemberUncheckedCreateWithoutPaidExpensesInput>
  }

  export type ExpenseShareCreateWithoutExpenseInput = {
    id?: string
    amountMinor: number
    createdAt?: Date | string
    member: LedgerMemberCreateNestedOneWithoutSharesInput
  }

  export type ExpenseShareUncheckedCreateWithoutExpenseInput = {
    id?: string
    memberId: string
    amountMinor: number
    createdAt?: Date | string
  }

  export type ExpenseShareCreateOrConnectWithoutExpenseInput = {
    where: ExpenseShareWhereUniqueInput
    create: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseShareCreateManyExpenseInputEnvelope = {
    data: ExpenseShareCreateManyExpenseInput | ExpenseShareCreateManyExpenseInput[]
    skipDuplicates?: boolean
  }

  export type LedgerUpsertWithoutExpensesInput = {
    update: XOR<LedgerUpdateWithoutExpensesInput, LedgerUncheckedUpdateWithoutExpensesInput>
    create: XOR<LedgerCreateWithoutExpensesInput, LedgerUncheckedCreateWithoutExpensesInput>
    where?: LedgerWhereInput
  }

  export type LedgerUpdateToOneWithWhereWithoutExpensesInput = {
    where?: LedgerWhereInput
    data: XOR<LedgerUpdateWithoutExpensesInput, LedgerUncheckedUpdateWithoutExpensesInput>
  }

  export type LedgerUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: LedgerMemberUpdateManyWithoutLedgerNestedInput
    invites?: LedgerInviteUpdateManyWithoutLedgerNestedInput
    auditEvents?: AuditEventUpdateManyWithoutLedgerNestedInput
    settlements?: SettlementUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: LedgerMemberUncheckedUpdateManyWithoutLedgerNestedInput
    invites?: LedgerInviteUncheckedUpdateManyWithoutLedgerNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutLedgerNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerMemberUpsertWithoutPaidExpensesInput = {
    update: XOR<LedgerMemberUpdateWithoutPaidExpensesInput, LedgerMemberUncheckedUpdateWithoutPaidExpensesInput>
    create: XOR<LedgerMemberCreateWithoutPaidExpensesInput, LedgerMemberUncheckedCreateWithoutPaidExpensesInput>
    where?: LedgerMemberWhereInput
  }

  export type LedgerMemberUpdateToOneWithWhereWithoutPaidExpensesInput = {
    where?: LedgerMemberWhereInput
    data: XOR<LedgerMemberUpdateWithoutPaidExpensesInput, LedgerMemberUncheckedUpdateWithoutPaidExpensesInput>
  }

  export type LedgerMemberUpdateWithoutPaidExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledger?: LedgerUpdateOneRequiredWithoutMembersNestedInput
    shares?: ExpenseShareUpdateManyWithoutMemberNestedInput
  }

  export type LedgerMemberUncheckedUpdateWithoutPaidExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: ExpenseShareUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type ExpenseShareUpsertWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseShareWhereUniqueInput
    update: XOR<ExpenseShareUpdateWithoutExpenseInput, ExpenseShareUncheckedUpdateWithoutExpenseInput>
    create: XOR<ExpenseShareCreateWithoutExpenseInput, ExpenseShareUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseShareUpdateWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseShareWhereUniqueInput
    data: XOR<ExpenseShareUpdateWithoutExpenseInput, ExpenseShareUncheckedUpdateWithoutExpenseInput>
  }

  export type ExpenseShareUpdateManyWithWhereWithoutExpenseInput = {
    where: ExpenseShareScalarWhereInput
    data: XOR<ExpenseShareUpdateManyMutationInput, ExpenseShareUncheckedUpdateManyWithoutExpenseInput>
  }

  export type ExpenseCreateWithoutSharesInput = {
    id?: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category?: $Enums.ExpenseCategory | null
    proofUrl?: string | null
    splitType?: $Enums.SplitType
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ledger: LedgerCreateNestedOneWithoutExpensesInput
    payer: LedgerMemberCreateNestedOneWithoutPaidExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutSharesInput = {
    id?: string
    ledgerId: string
    payerMemberId: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category?: $Enums.ExpenseCategory | null
    proofUrl?: string | null
    splitType?: $Enums.SplitType
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutSharesInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutSharesInput, ExpenseUncheckedCreateWithoutSharesInput>
  }

  export type LedgerMemberCreateWithoutSharesInput = {
    id?: string
    clerkUserId: string
    role: $Enums.MemberRole
    createdAt?: Date | string
    ledger: LedgerCreateNestedOneWithoutMembersInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
  }

  export type LedgerMemberUncheckedCreateWithoutSharesInput = {
    id?: string
    ledgerId: string
    clerkUserId: string
    role: $Enums.MemberRole
    createdAt?: Date | string
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
  }

  export type LedgerMemberCreateOrConnectWithoutSharesInput = {
    where: LedgerMemberWhereUniqueInput
    create: XOR<LedgerMemberCreateWithoutSharesInput, LedgerMemberUncheckedCreateWithoutSharesInput>
  }

  export type ExpenseUpsertWithoutSharesInput = {
    update: XOR<ExpenseUpdateWithoutSharesInput, ExpenseUncheckedUpdateWithoutSharesInput>
    create: XOR<ExpenseCreateWithoutSharesInput, ExpenseUncheckedCreateWithoutSharesInput>
    where?: ExpenseWhereInput
  }

  export type ExpenseUpdateToOneWithWhereWithoutSharesInput = {
    where?: ExpenseWhereInput
    data: XOR<ExpenseUpdateWithoutSharesInput, ExpenseUncheckedUpdateWithoutSharesInput>
  }

  export type ExpenseUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledger?: LedgerUpdateOneRequiredWithoutExpensesNestedInput
    payer?: LedgerMemberUpdateOneRequiredWithoutPaidExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    payerMemberId?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerMemberUpsertWithoutSharesInput = {
    update: XOR<LedgerMemberUpdateWithoutSharesInput, LedgerMemberUncheckedUpdateWithoutSharesInput>
    create: XOR<LedgerMemberCreateWithoutSharesInput, LedgerMemberUncheckedCreateWithoutSharesInput>
    where?: LedgerMemberWhereInput
  }

  export type LedgerMemberUpdateToOneWithWhereWithoutSharesInput = {
    where?: LedgerMemberWhereInput
    data: XOR<LedgerMemberUpdateWithoutSharesInput, LedgerMemberUncheckedUpdateWithoutSharesInput>
  }

  export type LedgerMemberUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledger?: LedgerUpdateOneRequiredWithoutMembersNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
  }

  export type LedgerMemberUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
  }

  export type LedgerCreateWithoutAuditEventsInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: LedgerMemberCreateNestedManyWithoutLedgerInput
    invites?: LedgerInviteCreateNestedManyWithoutLedgerInput
    expenses?: ExpenseCreateNestedManyWithoutLedgerInput
    settlements?: SettlementCreateNestedManyWithoutLedgerInput
  }

  export type LedgerUncheckedCreateWithoutAuditEventsInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: LedgerMemberUncheckedCreateNestedManyWithoutLedgerInput
    invites?: LedgerInviteUncheckedCreateNestedManyWithoutLedgerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutLedgerInput
    settlements?: SettlementUncheckedCreateNestedManyWithoutLedgerInput
  }

  export type LedgerCreateOrConnectWithoutAuditEventsInput = {
    where: LedgerWhereUniqueInput
    create: XOR<LedgerCreateWithoutAuditEventsInput, LedgerUncheckedCreateWithoutAuditEventsInput>
  }

  export type LedgerUpsertWithoutAuditEventsInput = {
    update: XOR<LedgerUpdateWithoutAuditEventsInput, LedgerUncheckedUpdateWithoutAuditEventsInput>
    create: XOR<LedgerCreateWithoutAuditEventsInput, LedgerUncheckedCreateWithoutAuditEventsInput>
    where?: LedgerWhereInput
  }

  export type LedgerUpdateToOneWithWhereWithoutAuditEventsInput = {
    where?: LedgerWhereInput
    data: XOR<LedgerUpdateWithoutAuditEventsInput, LedgerUncheckedUpdateWithoutAuditEventsInput>
  }

  export type LedgerUpdateWithoutAuditEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: LedgerMemberUpdateManyWithoutLedgerNestedInput
    invites?: LedgerInviteUpdateManyWithoutLedgerNestedInput
    expenses?: ExpenseUpdateManyWithoutLedgerNestedInput
    settlements?: SettlementUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerUncheckedUpdateWithoutAuditEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: LedgerMemberUncheckedUpdateManyWithoutLedgerNestedInput
    invites?: LedgerInviteUncheckedUpdateManyWithoutLedgerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutLedgerNestedInput
    settlements?: SettlementUncheckedUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerCreateWithoutSettlementsInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: LedgerMemberCreateNestedManyWithoutLedgerInput
    invites?: LedgerInviteCreateNestedManyWithoutLedgerInput
    expenses?: ExpenseCreateNestedManyWithoutLedgerInput
    auditEvents?: AuditEventCreateNestedManyWithoutLedgerInput
  }

  export type LedgerUncheckedCreateWithoutSettlementsInput = {
    id?: string
    ownerId: string
    name: string
    description?: string | null
    type?: $Enums.LedgerType
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: LedgerMemberUncheckedCreateNestedManyWithoutLedgerInput
    invites?: LedgerInviteUncheckedCreateNestedManyWithoutLedgerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutLedgerInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutLedgerInput
  }

  export type LedgerCreateOrConnectWithoutSettlementsInput = {
    where: LedgerWhereUniqueInput
    create: XOR<LedgerCreateWithoutSettlementsInput, LedgerUncheckedCreateWithoutSettlementsInput>
  }

  export type SettlementTransferCreateWithoutSettlementInput = {
    id?: string
    fromMemberId: string
    toMemberId: string
    amountMinor: number
  }

  export type SettlementTransferUncheckedCreateWithoutSettlementInput = {
    id?: string
    fromMemberId: string
    toMemberId: string
    amountMinor: number
  }

  export type SettlementTransferCreateOrConnectWithoutSettlementInput = {
    where: SettlementTransferWhereUniqueInput
    create: XOR<SettlementTransferCreateWithoutSettlementInput, SettlementTransferUncheckedCreateWithoutSettlementInput>
  }

  export type SettlementTransferCreateManySettlementInputEnvelope = {
    data: SettlementTransferCreateManySettlementInput | SettlementTransferCreateManySettlementInput[]
    skipDuplicates?: boolean
  }

  export type LedgerUpsertWithoutSettlementsInput = {
    update: XOR<LedgerUpdateWithoutSettlementsInput, LedgerUncheckedUpdateWithoutSettlementsInput>
    create: XOR<LedgerCreateWithoutSettlementsInput, LedgerUncheckedCreateWithoutSettlementsInput>
    where?: LedgerWhereInput
  }

  export type LedgerUpdateToOneWithWhereWithoutSettlementsInput = {
    where?: LedgerWhereInput
    data: XOR<LedgerUpdateWithoutSettlementsInput, LedgerUncheckedUpdateWithoutSettlementsInput>
  }

  export type LedgerUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: LedgerMemberUpdateManyWithoutLedgerNestedInput
    invites?: LedgerInviteUpdateManyWithoutLedgerNestedInput
    expenses?: ExpenseUpdateManyWithoutLedgerNestedInput
    auditEvents?: AuditEventUpdateManyWithoutLedgerNestedInput
  }

  export type LedgerUncheckedUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: LedgerMemberUncheckedUpdateManyWithoutLedgerNestedInput
    invites?: LedgerInviteUncheckedUpdateManyWithoutLedgerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutLedgerNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutLedgerNestedInput
  }

  export type SettlementTransferUpsertWithWhereUniqueWithoutSettlementInput = {
    where: SettlementTransferWhereUniqueInput
    update: XOR<SettlementTransferUpdateWithoutSettlementInput, SettlementTransferUncheckedUpdateWithoutSettlementInput>
    create: XOR<SettlementTransferCreateWithoutSettlementInput, SettlementTransferUncheckedCreateWithoutSettlementInput>
  }

  export type SettlementTransferUpdateWithWhereUniqueWithoutSettlementInput = {
    where: SettlementTransferWhereUniqueInput
    data: XOR<SettlementTransferUpdateWithoutSettlementInput, SettlementTransferUncheckedUpdateWithoutSettlementInput>
  }

  export type SettlementTransferUpdateManyWithWhereWithoutSettlementInput = {
    where: SettlementTransferScalarWhereInput
    data: XOR<SettlementTransferUpdateManyMutationInput, SettlementTransferUncheckedUpdateManyWithoutSettlementInput>
  }

  export type SettlementTransferScalarWhereInput = {
    AND?: SettlementTransferScalarWhereInput | SettlementTransferScalarWhereInput[]
    OR?: SettlementTransferScalarWhereInput[]
    NOT?: SettlementTransferScalarWhereInput | SettlementTransferScalarWhereInput[]
    id?: StringFilter<"SettlementTransfer"> | string
    settlementId?: StringFilter<"SettlementTransfer"> | string
    fromMemberId?: StringFilter<"SettlementTransfer"> | string
    toMemberId?: StringFilter<"SettlementTransfer"> | string
    amountMinor?: IntFilter<"SettlementTransfer"> | number
  }

  export type SettlementCreateWithoutTransfersInput = {
    id?: string
    sourceBalanceFingerprint: string
    status?: $Enums.SettlementStatus
    totalTransferredMinor: number
    transactionCount: number
    createdByClerkUserId: string
    createdAt?: Date | string
    completedByClerkUserId?: string | null
    completedAt?: Date | string | null
    ledger: LedgerCreateNestedOneWithoutSettlementsInput
  }

  export type SettlementUncheckedCreateWithoutTransfersInput = {
    id?: string
    ledgerId: string
    sourceBalanceFingerprint: string
    status?: $Enums.SettlementStatus
    totalTransferredMinor: number
    transactionCount: number
    createdByClerkUserId: string
    createdAt?: Date | string
    completedByClerkUserId?: string | null
    completedAt?: Date | string | null
  }

  export type SettlementCreateOrConnectWithoutTransfersInput = {
    where: SettlementWhereUniqueInput
    create: XOR<SettlementCreateWithoutTransfersInput, SettlementUncheckedCreateWithoutTransfersInput>
  }

  export type SettlementUpsertWithoutTransfersInput = {
    update: XOR<SettlementUpdateWithoutTransfersInput, SettlementUncheckedUpdateWithoutTransfersInput>
    create: XOR<SettlementCreateWithoutTransfersInput, SettlementUncheckedCreateWithoutTransfersInput>
    where?: SettlementWhereInput
  }

  export type SettlementUpdateToOneWithWhereWithoutTransfersInput = {
    where?: SettlementWhereInput
    data: XOR<SettlementUpdateWithoutTransfersInput, SettlementUncheckedUpdateWithoutTransfersInput>
  }

  export type SettlementUpdateWithoutTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceBalanceFingerprint?: StringFieldUpdateOperationsInput | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    totalTransferredMinor?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedByClerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledger?: LedgerUpdateOneRequiredWithoutSettlementsNestedInput
  }

  export type SettlementUncheckedUpdateWithoutTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    sourceBalanceFingerprint?: StringFieldUpdateOperationsInput | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    totalTransferredMinor?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedByClerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LedgerMemberCreateManyLedgerInput = {
    id?: string
    clerkUserId: string
    role: $Enums.MemberRole
    createdAt?: Date | string
  }

  export type LedgerInviteCreateManyLedgerInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
    createdByClerkUserId: string
  }

  export type ExpenseCreateManyLedgerInput = {
    id?: string
    payerMemberId: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category?: $Enums.ExpenseCategory | null
    proofUrl?: string | null
    splitType?: $Enums.SplitType
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditEventCreateManyLedgerInput = {
    id?: string
    actorClerkUserId: string
    eventType: $Enums.AuditEventType
    entityType: $Enums.AuditEntityType
    entityId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type SettlementCreateManyLedgerInput = {
    id?: string
    sourceBalanceFingerprint: string
    status?: $Enums.SettlementStatus
    totalTransferredMinor: number
    transactionCount: number
    createdByClerkUserId: string
    createdAt?: Date | string
    completedByClerkUserId?: string | null
    completedAt?: Date | string | null
  }

  export type LedgerMemberUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    shares?: ExpenseShareUpdateManyWithoutMemberNestedInput
  }

  export type LedgerMemberUncheckedUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    shares?: ExpenseShareUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type LedgerMemberUncheckedUpdateManyWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerInviteUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
  }

  export type LedgerInviteUncheckedUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
  }

  export type LedgerInviteUncheckedUpdateManyWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payer?: LedgerMemberUpdateOneRequiredWithoutPaidExpensesNestedInput
    shares?: ExpenseShareUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    payerMemberId?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: ExpenseShareUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    payerMemberId?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorClerkUserId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorClerkUserId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorClerkUserId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumAuditEventTypeFieldUpdateOperationsInput | $Enums.AuditEventType
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceBalanceFingerprint?: StringFieldUpdateOperationsInput | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    totalTransferredMinor?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedByClerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transfers?: SettlementTransferUpdateManyWithoutSettlementNestedInput
  }

  export type SettlementUncheckedUpdateWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceBalanceFingerprint?: StringFieldUpdateOperationsInput | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    totalTransferredMinor?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedByClerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transfers?: SettlementTransferUncheckedUpdateManyWithoutSettlementNestedInput
  }

  export type SettlementUncheckedUpdateManyWithoutLedgerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceBalanceFingerprint?: StringFieldUpdateOperationsInput | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    totalTransferredMinor?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedByClerkUserId?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseCreateManyPayerInput = {
    id?: string
    ledgerId: string
    createdByClerkUserId: string
    amountMinor: number
    description: string
    category?: $Enums.ExpenseCategory | null
    proofUrl?: string | null
    splitType?: $Enums.SplitType
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseShareCreateManyMemberInput = {
    id?: string
    expenseId: string
    amountMinor: number
    createdAt?: Date | string
  }

  export type ExpenseUpdateWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledger?: LedgerUpdateOneRequiredWithoutExpensesNestedInput
    shares?: ExpenseShareUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: ExpenseShareUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ledgerId?: StringFieldUpdateOperationsInput | string
    createdByClerkUserId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumExpenseCategoryFieldUpdateOperationsInput | $Enums.ExpenseCategory | null
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: EnumSplitTypeFieldUpdateOperationsInput | $Enums.SplitType
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseShareUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expense?: ExpenseUpdateOneRequiredWithoutSharesNestedInput
  }

  export type ExpenseShareUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseShareUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseShareCreateManyExpenseInput = {
    id?: string
    memberId: string
    amountMinor: number
    createdAt?: Date | string
  }

  export type ExpenseShareUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: LedgerMemberUpdateOneRequiredWithoutSharesNestedInput
  }

  export type ExpenseShareUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseShareUncheckedUpdateManyWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementTransferCreateManySettlementInput = {
    id?: string
    fromMemberId: string
    toMemberId: string
    amountMinor: number
  }

  export type SettlementTransferUpdateWithoutSettlementInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromMemberId?: StringFieldUpdateOperationsInput | string
    toMemberId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
  }

  export type SettlementTransferUncheckedUpdateWithoutSettlementInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromMemberId?: StringFieldUpdateOperationsInput | string
    toMemberId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
  }

  export type SettlementTransferUncheckedUpdateManyWithoutSettlementInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromMemberId?: StringFieldUpdateOperationsInput | string
    toMemberId?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}