
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Estabelecimento
 * 
 */
export type Estabelecimento = $Result.DefaultSelection<Prisma.$EstabelecimentoPayload>
/**
 * Model EstabelecimentoService
 * 
 */
export type EstabelecimentoService = $Result.DefaultSelection<Prisma.$EstabelecimentoServicePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estabelecimento`: Exposes CRUD operations for the **Estabelecimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estabelecimentos
    * const estabelecimentos = await prisma.estabelecimento.findMany()
    * ```
    */
  get estabelecimento(): Prisma.EstabelecimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estabelecimentoService`: Exposes CRUD operations for the **EstabelecimentoService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstabelecimentoServices
    * const estabelecimentoServices = await prisma.estabelecimentoService.findMany()
    * ```
    */
  get estabelecimentoService(): Prisma.EstabelecimentoServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    User: 'User',
    Estabelecimento: 'Estabelecimento',
    EstabelecimentoService: 'EstabelecimentoService',
    Booking: 'Booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "estabelecimento" | "estabelecimentoService" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Estabelecimento: {
        payload: Prisma.$EstabelecimentoPayload<ExtArgs>
        fields: Prisma.EstabelecimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstabelecimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstabelecimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          findFirst: {
            args: Prisma.EstabelecimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstabelecimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          findMany: {
            args: Prisma.EstabelecimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>[]
          }
          create: {
            args: Prisma.EstabelecimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          createMany: {
            args: Prisma.EstabelecimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstabelecimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>[]
          }
          delete: {
            args: Prisma.EstabelecimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          update: {
            args: Prisma.EstabelecimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          deleteMany: {
            args: Prisma.EstabelecimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstabelecimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstabelecimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>[]
          }
          upsert: {
            args: Prisma.EstabelecimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          aggregate: {
            args: Prisma.EstabelecimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstabelecimento>
          }
          groupBy: {
            args: Prisma.EstabelecimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstabelecimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstabelecimentoCountArgs<ExtArgs>
            result: $Utils.Optional<EstabelecimentoCountAggregateOutputType> | number
          }
        }
      }
      EstabelecimentoService: {
        payload: Prisma.$EstabelecimentoServicePayload<ExtArgs>
        fields: Prisma.EstabelecimentoServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstabelecimentoServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstabelecimentoServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoServicePayload>
          }
          findFirst: {
            args: Prisma.EstabelecimentoServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstabelecimentoServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoServicePayload>
          }
          findMany: {
            args: Prisma.EstabelecimentoServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoServicePayload>[]
          }
          create: {
            args: Prisma.EstabelecimentoServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoServicePayload>
          }
          createMany: {
            args: Prisma.EstabelecimentoServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstabelecimentoServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoServicePayload>[]
          }
          delete: {
            args: Prisma.EstabelecimentoServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoServicePayload>
          }
          update: {
            args: Prisma.EstabelecimentoServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoServicePayload>
          }
          deleteMany: {
            args: Prisma.EstabelecimentoServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstabelecimentoServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstabelecimentoServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoServicePayload>[]
          }
          upsert: {
            args: Prisma.EstabelecimentoServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoServicePayload>
          }
          aggregate: {
            args: Prisma.EstabelecimentoServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstabelecimentoService>
          }
          groupBy: {
            args: Prisma.EstabelecimentoServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstabelecimentoServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstabelecimentoServiceCountArgs<ExtArgs>
            result: $Utils.Optional<EstabelecimentoServiceCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    estabelecimento?: EstabelecimentoOmit
    estabelecimentoService?: EstabelecimentoServiceOmit
    booking?: BookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type EstabelecimentoCountOutputType
   */

  export type EstabelecimentoCountOutputType = {
    services: number
  }

  export type EstabelecimentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | EstabelecimentoCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * EstabelecimentoCountOutputType without action
   */
  export type EstabelecimentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoCountOutputType
     */
    select?: EstabelecimentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstabelecimentoCountOutputType without action
   */
  export type EstabelecimentoCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstabelecimentoServiceWhereInput
  }


  /**
   * Count Type EstabelecimentoServiceCountOutputType
   */

  export type EstabelecimentoServiceCountOutputType = {
    bookings: number
  }

  export type EstabelecimentoServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | EstabelecimentoServiceCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * EstabelecimentoServiceCountOutputType without action
   */
  export type EstabelecimentoServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoServiceCountOutputType
     */
    select?: EstabelecimentoServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstabelecimentoServiceCountOutputType without action
   */
  export type EstabelecimentoServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Estabelecimento
   */

  export type AggregateEstabelecimento = {
    _count: EstabelecimentoCountAggregateOutputType | null
    _min: EstabelecimentoMinAggregateOutputType | null
    _max: EstabelecimentoMaxAggregateOutputType | null
  }

  export type EstabelecimentoMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstabelecimentoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstabelecimentoCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phones: number
    description: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EstabelecimentoMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstabelecimentoMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstabelecimentoCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phones?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EstabelecimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estabelecimento to aggregate.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estabelecimentos
    **/
    _count?: true | EstabelecimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstabelecimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstabelecimentoMaxAggregateInputType
  }

  export type GetEstabelecimentoAggregateType<T extends EstabelecimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstabelecimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstabelecimento[P]>
      : GetScalarType<T[P], AggregateEstabelecimento[P]>
  }




  export type EstabelecimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstabelecimentoWhereInput
    orderBy?: EstabelecimentoOrderByWithAggregationInput | EstabelecimentoOrderByWithAggregationInput[]
    by: EstabelecimentoScalarFieldEnum[] | EstabelecimentoScalarFieldEnum
    having?: EstabelecimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstabelecimentoCountAggregateInputType | true
    _min?: EstabelecimentoMinAggregateInputType
    _max?: EstabelecimentoMaxAggregateInputType
  }

  export type EstabelecimentoGroupByOutputType = {
    id: string
    name: string
    address: string
    phones: string[]
    description: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: EstabelecimentoCountAggregateOutputType | null
    _min: EstabelecimentoMinAggregateOutputType | null
    _max: EstabelecimentoMaxAggregateOutputType | null
  }

  type GetEstabelecimentoGroupByPayload<T extends EstabelecimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstabelecimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstabelecimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstabelecimentoGroupByOutputType[P]>
            : GetScalarType<T[P], EstabelecimentoGroupByOutputType[P]>
        }
      >
    >


  export type EstabelecimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phones?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | Estabelecimento$servicesArgs<ExtArgs>
    _count?: boolean | EstabelecimentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estabelecimento"]>

  export type EstabelecimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phones?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["estabelecimento"]>

  export type EstabelecimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phones?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["estabelecimento"]>

  export type EstabelecimentoSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phones?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EstabelecimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phones" | "description" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["estabelecimento"]>
  export type EstabelecimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Estabelecimento$servicesArgs<ExtArgs>
    _count?: boolean | EstabelecimentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstabelecimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstabelecimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstabelecimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estabelecimento"
    objects: {
      services: Prisma.$EstabelecimentoServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phones: string[]
      description: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["estabelecimento"]>
    composites: {}
  }

  type EstabelecimentoGetPayload<S extends boolean | null | undefined | EstabelecimentoDefaultArgs> = $Result.GetResult<Prisma.$EstabelecimentoPayload, S>

  type EstabelecimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstabelecimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstabelecimentoCountAggregateInputType | true
    }

  export interface EstabelecimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estabelecimento'], meta: { name: 'Estabelecimento' } }
    /**
     * Find zero or one Estabelecimento that matches the filter.
     * @param {EstabelecimentoFindUniqueArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstabelecimentoFindUniqueArgs>(args: SelectSubset<T, EstabelecimentoFindUniqueArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estabelecimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstabelecimentoFindUniqueOrThrowArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstabelecimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, EstabelecimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estabelecimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoFindFirstArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstabelecimentoFindFirstArgs>(args?: SelectSubset<T, EstabelecimentoFindFirstArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estabelecimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoFindFirstOrThrowArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstabelecimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, EstabelecimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estabelecimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estabelecimentos
     * const estabelecimentos = await prisma.estabelecimento.findMany()
     * 
     * // Get first 10 Estabelecimentos
     * const estabelecimentos = await prisma.estabelecimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estabelecimentoWithIdOnly = await prisma.estabelecimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstabelecimentoFindManyArgs>(args?: SelectSubset<T, EstabelecimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estabelecimento.
     * @param {EstabelecimentoCreateArgs} args - Arguments to create a Estabelecimento.
     * @example
     * // Create one Estabelecimento
     * const Estabelecimento = await prisma.estabelecimento.create({
     *   data: {
     *     // ... data to create a Estabelecimento
     *   }
     * })
     * 
     */
    create<T extends EstabelecimentoCreateArgs>(args: SelectSubset<T, EstabelecimentoCreateArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estabelecimentos.
     * @param {EstabelecimentoCreateManyArgs} args - Arguments to create many Estabelecimentos.
     * @example
     * // Create many Estabelecimentos
     * const estabelecimento = await prisma.estabelecimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstabelecimentoCreateManyArgs>(args?: SelectSubset<T, EstabelecimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estabelecimentos and returns the data saved in the database.
     * @param {EstabelecimentoCreateManyAndReturnArgs} args - Arguments to create many Estabelecimentos.
     * @example
     * // Create many Estabelecimentos
     * const estabelecimento = await prisma.estabelecimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estabelecimentos and only return the `id`
     * const estabelecimentoWithIdOnly = await prisma.estabelecimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstabelecimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, EstabelecimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estabelecimento.
     * @param {EstabelecimentoDeleteArgs} args - Arguments to delete one Estabelecimento.
     * @example
     * // Delete one Estabelecimento
     * const Estabelecimento = await prisma.estabelecimento.delete({
     *   where: {
     *     // ... filter to delete one Estabelecimento
     *   }
     * })
     * 
     */
    delete<T extends EstabelecimentoDeleteArgs>(args: SelectSubset<T, EstabelecimentoDeleteArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estabelecimento.
     * @param {EstabelecimentoUpdateArgs} args - Arguments to update one Estabelecimento.
     * @example
     * // Update one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstabelecimentoUpdateArgs>(args: SelectSubset<T, EstabelecimentoUpdateArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estabelecimentos.
     * @param {EstabelecimentoDeleteManyArgs} args - Arguments to filter Estabelecimentos to delete.
     * @example
     * // Delete a few Estabelecimentos
     * const { count } = await prisma.estabelecimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstabelecimentoDeleteManyArgs>(args?: SelectSubset<T, EstabelecimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estabelecimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estabelecimentos
     * const estabelecimento = await prisma.estabelecimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstabelecimentoUpdateManyArgs>(args: SelectSubset<T, EstabelecimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estabelecimentos and returns the data updated in the database.
     * @param {EstabelecimentoUpdateManyAndReturnArgs} args - Arguments to update many Estabelecimentos.
     * @example
     * // Update many Estabelecimentos
     * const estabelecimento = await prisma.estabelecimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estabelecimentos and only return the `id`
     * const estabelecimentoWithIdOnly = await prisma.estabelecimento.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstabelecimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, EstabelecimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estabelecimento.
     * @param {EstabelecimentoUpsertArgs} args - Arguments to update or create a Estabelecimento.
     * @example
     * // Update or create a Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.upsert({
     *   create: {
     *     // ... data to create a Estabelecimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estabelecimento we want to update
     *   }
     * })
     */
    upsert<T extends EstabelecimentoUpsertArgs>(args: SelectSubset<T, EstabelecimentoUpsertArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estabelecimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoCountArgs} args - Arguments to filter Estabelecimentos to count.
     * @example
     * // Count the number of Estabelecimentos
     * const count = await prisma.estabelecimento.count({
     *   where: {
     *     // ... the filter for the Estabelecimentos we want to count
     *   }
     * })
    **/
    count<T extends EstabelecimentoCountArgs>(
      args?: Subset<T, EstabelecimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstabelecimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estabelecimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstabelecimentoAggregateArgs>(args: Subset<T, EstabelecimentoAggregateArgs>): Prisma.PrismaPromise<GetEstabelecimentoAggregateType<T>>

    /**
     * Group by Estabelecimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoGroupByArgs} args - Group by arguments.
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
      T extends EstabelecimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstabelecimentoGroupByArgs['orderBy'] }
        : { orderBy?: EstabelecimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstabelecimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstabelecimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estabelecimento model
   */
  readonly fields: EstabelecimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estabelecimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstabelecimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Estabelecimento$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Estabelecimento$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estabelecimento model
   */
  interface EstabelecimentoFieldRefs {
    readonly id: FieldRef<"Estabelecimento", 'String'>
    readonly name: FieldRef<"Estabelecimento", 'String'>
    readonly address: FieldRef<"Estabelecimento", 'String'>
    readonly phones: FieldRef<"Estabelecimento", 'String[]'>
    readonly description: FieldRef<"Estabelecimento", 'String'>
    readonly imageUrl: FieldRef<"Estabelecimento", 'String'>
    readonly createdAt: FieldRef<"Estabelecimento", 'DateTime'>
    readonly updatedAt: FieldRef<"Estabelecimento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Estabelecimento findUnique
   */
  export type EstabelecimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where: EstabelecimentoWhereUniqueInput
  }

  /**
   * Estabelecimento findUniqueOrThrow
   */
  export type EstabelecimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where: EstabelecimentoWhereUniqueInput
  }

  /**
   * Estabelecimento findFirst
   */
  export type EstabelecimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estabelecimentos.
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estabelecimentos.
     */
    distinct?: EstabelecimentoScalarFieldEnum | EstabelecimentoScalarFieldEnum[]
  }

  /**
   * Estabelecimento findFirstOrThrow
   */
  export type EstabelecimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estabelecimentos.
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estabelecimentos.
     */
    distinct?: EstabelecimentoScalarFieldEnum | EstabelecimentoScalarFieldEnum[]
  }

  /**
   * Estabelecimento findMany
   */
  export type EstabelecimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter, which Estabelecimentos to fetch.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estabelecimentos.
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    distinct?: EstabelecimentoScalarFieldEnum | EstabelecimentoScalarFieldEnum[]
  }

  /**
   * Estabelecimento create
   */
  export type EstabelecimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Estabelecimento.
     */
    data: XOR<EstabelecimentoCreateInput, EstabelecimentoUncheckedCreateInput>
  }

  /**
   * Estabelecimento createMany
   */
  export type EstabelecimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estabelecimentos.
     */
    data: EstabelecimentoCreateManyInput | EstabelecimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estabelecimento createManyAndReturn
   */
  export type EstabelecimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * The data used to create many Estabelecimentos.
     */
    data: EstabelecimentoCreateManyInput | EstabelecimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estabelecimento update
   */
  export type EstabelecimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Estabelecimento.
     */
    data: XOR<EstabelecimentoUpdateInput, EstabelecimentoUncheckedUpdateInput>
    /**
     * Choose, which Estabelecimento to update.
     */
    where: EstabelecimentoWhereUniqueInput
  }

  /**
   * Estabelecimento updateMany
   */
  export type EstabelecimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estabelecimentos.
     */
    data: XOR<EstabelecimentoUpdateManyMutationInput, EstabelecimentoUncheckedUpdateManyInput>
    /**
     * Filter which Estabelecimentos to update
     */
    where?: EstabelecimentoWhereInput
    /**
     * Limit how many Estabelecimentos to update.
     */
    limit?: number
  }

  /**
   * Estabelecimento updateManyAndReturn
   */
  export type EstabelecimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * The data used to update Estabelecimentos.
     */
    data: XOR<EstabelecimentoUpdateManyMutationInput, EstabelecimentoUncheckedUpdateManyInput>
    /**
     * Filter which Estabelecimentos to update
     */
    where?: EstabelecimentoWhereInput
    /**
     * Limit how many Estabelecimentos to update.
     */
    limit?: number
  }

  /**
   * Estabelecimento upsert
   */
  export type EstabelecimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Estabelecimento to update in case it exists.
     */
    where: EstabelecimentoWhereUniqueInput
    /**
     * In case the Estabelecimento found by the `where` argument doesn't exist, create a new Estabelecimento with this data.
     */
    create: XOR<EstabelecimentoCreateInput, EstabelecimentoUncheckedCreateInput>
    /**
     * In case the Estabelecimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstabelecimentoUpdateInput, EstabelecimentoUncheckedUpdateInput>
  }

  /**
   * Estabelecimento delete
   */
  export type EstabelecimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter which Estabelecimento to delete.
     */
    where: EstabelecimentoWhereUniqueInput
  }

  /**
   * Estabelecimento deleteMany
   */
  export type EstabelecimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estabelecimentos to delete
     */
    where?: EstabelecimentoWhereInput
    /**
     * Limit how many Estabelecimentos to delete.
     */
    limit?: number
  }

  /**
   * Estabelecimento.services
   */
  export type Estabelecimento$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceInclude<ExtArgs> | null
    where?: EstabelecimentoServiceWhereInput
    orderBy?: EstabelecimentoServiceOrderByWithRelationInput | EstabelecimentoServiceOrderByWithRelationInput[]
    cursor?: EstabelecimentoServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstabelecimentoServiceScalarFieldEnum | EstabelecimentoServiceScalarFieldEnum[]
  }

  /**
   * Estabelecimento without action
   */
  export type EstabelecimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
  }


  /**
   * Model EstabelecimentoService
   */

  export type AggregateEstabelecimentoService = {
    _count: EstabelecimentoServiceCountAggregateOutputType | null
    _avg: EstabelecimentoServiceAvgAggregateOutputType | null
    _sum: EstabelecimentoServiceSumAggregateOutputType | null
    _min: EstabelecimentoServiceMinAggregateOutputType | null
    _max: EstabelecimentoServiceMaxAggregateOutputType | null
  }

  export type EstabelecimentoServiceAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type EstabelecimentoServiceSumAggregateOutputType = {
    price: Decimal | null
  }

  export type EstabelecimentoServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    price: Decimal | null
    estabelecimentoId: string | null
  }

  export type EstabelecimentoServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    price: Decimal | null
    estabelecimentoId: string | null
  }

  export type EstabelecimentoServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    price: number
    estabelecimentoId: number
    _all: number
  }


  export type EstabelecimentoServiceAvgAggregateInputType = {
    price?: true
  }

  export type EstabelecimentoServiceSumAggregateInputType = {
    price?: true
  }

  export type EstabelecimentoServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    price?: true
    estabelecimentoId?: true
  }

  export type EstabelecimentoServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    price?: true
    estabelecimentoId?: true
  }

  export type EstabelecimentoServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    price?: true
    estabelecimentoId?: true
    _all?: true
  }

  export type EstabelecimentoServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstabelecimentoService to aggregate.
     */
    where?: EstabelecimentoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstabelecimentoServices to fetch.
     */
    orderBy?: EstabelecimentoServiceOrderByWithRelationInput | EstabelecimentoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstabelecimentoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstabelecimentoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstabelecimentoServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstabelecimentoServices
    **/
    _count?: true | EstabelecimentoServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstabelecimentoServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstabelecimentoServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstabelecimentoServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstabelecimentoServiceMaxAggregateInputType
  }

  export type GetEstabelecimentoServiceAggregateType<T extends EstabelecimentoServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateEstabelecimentoService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstabelecimentoService[P]>
      : GetScalarType<T[P], AggregateEstabelecimentoService[P]>
  }




  export type EstabelecimentoServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstabelecimentoServiceWhereInput
    orderBy?: EstabelecimentoServiceOrderByWithAggregationInput | EstabelecimentoServiceOrderByWithAggregationInput[]
    by: EstabelecimentoServiceScalarFieldEnum[] | EstabelecimentoServiceScalarFieldEnum
    having?: EstabelecimentoServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstabelecimentoServiceCountAggregateInputType | true
    _avg?: EstabelecimentoServiceAvgAggregateInputType
    _sum?: EstabelecimentoServiceSumAggregateInputType
    _min?: EstabelecimentoServiceMinAggregateInputType
    _max?: EstabelecimentoServiceMaxAggregateInputType
  }

  export type EstabelecimentoServiceGroupByOutputType = {
    id: string
    name: string
    description: string
    imageUrl: string
    price: Decimal
    estabelecimentoId: string
    _count: EstabelecimentoServiceCountAggregateOutputType | null
    _avg: EstabelecimentoServiceAvgAggregateOutputType | null
    _sum: EstabelecimentoServiceSumAggregateOutputType | null
    _min: EstabelecimentoServiceMinAggregateOutputType | null
    _max: EstabelecimentoServiceMaxAggregateOutputType | null
  }

  type GetEstabelecimentoServiceGroupByPayload<T extends EstabelecimentoServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstabelecimentoServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstabelecimentoServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstabelecimentoServiceGroupByOutputType[P]>
            : GetScalarType<T[P], EstabelecimentoServiceGroupByOutputType[P]>
        }
      >
    >


  export type EstabelecimentoServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    estabelecimentoId?: boolean
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
    bookings?: boolean | EstabelecimentoService$bookingsArgs<ExtArgs>
    _count?: boolean | EstabelecimentoServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estabelecimentoService"]>

  export type EstabelecimentoServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    estabelecimentoId?: boolean
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estabelecimentoService"]>

  export type EstabelecimentoServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    estabelecimentoId?: boolean
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estabelecimentoService"]>

  export type EstabelecimentoServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    estabelecimentoId?: boolean
  }

  export type EstabelecimentoServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "price" | "estabelecimentoId", ExtArgs["result"]["estabelecimentoService"]>
  export type EstabelecimentoServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
    bookings?: boolean | EstabelecimentoService$bookingsArgs<ExtArgs>
    _count?: boolean | EstabelecimentoServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstabelecimentoServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }
  export type EstabelecimentoServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }

  export type $EstabelecimentoServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstabelecimentoService"
    objects: {
      estabelecimento: Prisma.$EstabelecimentoPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      imageUrl: string
      price: Prisma.Decimal
      estabelecimentoId: string
    }, ExtArgs["result"]["estabelecimentoService"]>
    composites: {}
  }

  type EstabelecimentoServiceGetPayload<S extends boolean | null | undefined | EstabelecimentoServiceDefaultArgs> = $Result.GetResult<Prisma.$EstabelecimentoServicePayload, S>

  type EstabelecimentoServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstabelecimentoServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstabelecimentoServiceCountAggregateInputType | true
    }

  export interface EstabelecimentoServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstabelecimentoService'], meta: { name: 'EstabelecimentoService' } }
    /**
     * Find zero or one EstabelecimentoService that matches the filter.
     * @param {EstabelecimentoServiceFindUniqueArgs} args - Arguments to find a EstabelecimentoService
     * @example
     * // Get one EstabelecimentoService
     * const estabelecimentoService = await prisma.estabelecimentoService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstabelecimentoServiceFindUniqueArgs>(args: SelectSubset<T, EstabelecimentoServiceFindUniqueArgs<ExtArgs>>): Prisma__EstabelecimentoServiceClient<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstabelecimentoService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstabelecimentoServiceFindUniqueOrThrowArgs} args - Arguments to find a EstabelecimentoService
     * @example
     * // Get one EstabelecimentoService
     * const estabelecimentoService = await prisma.estabelecimentoService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstabelecimentoServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, EstabelecimentoServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstabelecimentoServiceClient<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstabelecimentoService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoServiceFindFirstArgs} args - Arguments to find a EstabelecimentoService
     * @example
     * // Get one EstabelecimentoService
     * const estabelecimentoService = await prisma.estabelecimentoService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstabelecimentoServiceFindFirstArgs>(args?: SelectSubset<T, EstabelecimentoServiceFindFirstArgs<ExtArgs>>): Prisma__EstabelecimentoServiceClient<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstabelecimentoService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoServiceFindFirstOrThrowArgs} args - Arguments to find a EstabelecimentoService
     * @example
     * // Get one EstabelecimentoService
     * const estabelecimentoService = await prisma.estabelecimentoService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstabelecimentoServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, EstabelecimentoServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstabelecimentoServiceClient<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstabelecimentoServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstabelecimentoServices
     * const estabelecimentoServices = await prisma.estabelecimentoService.findMany()
     * 
     * // Get first 10 EstabelecimentoServices
     * const estabelecimentoServices = await prisma.estabelecimentoService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estabelecimentoServiceWithIdOnly = await prisma.estabelecimentoService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstabelecimentoServiceFindManyArgs>(args?: SelectSubset<T, EstabelecimentoServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstabelecimentoService.
     * @param {EstabelecimentoServiceCreateArgs} args - Arguments to create a EstabelecimentoService.
     * @example
     * // Create one EstabelecimentoService
     * const EstabelecimentoService = await prisma.estabelecimentoService.create({
     *   data: {
     *     // ... data to create a EstabelecimentoService
     *   }
     * })
     * 
     */
    create<T extends EstabelecimentoServiceCreateArgs>(args: SelectSubset<T, EstabelecimentoServiceCreateArgs<ExtArgs>>): Prisma__EstabelecimentoServiceClient<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstabelecimentoServices.
     * @param {EstabelecimentoServiceCreateManyArgs} args - Arguments to create many EstabelecimentoServices.
     * @example
     * // Create many EstabelecimentoServices
     * const estabelecimentoService = await prisma.estabelecimentoService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstabelecimentoServiceCreateManyArgs>(args?: SelectSubset<T, EstabelecimentoServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EstabelecimentoServices and returns the data saved in the database.
     * @param {EstabelecimentoServiceCreateManyAndReturnArgs} args - Arguments to create many EstabelecimentoServices.
     * @example
     * // Create many EstabelecimentoServices
     * const estabelecimentoService = await prisma.estabelecimentoService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EstabelecimentoServices and only return the `id`
     * const estabelecimentoServiceWithIdOnly = await prisma.estabelecimentoService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstabelecimentoServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, EstabelecimentoServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EstabelecimentoService.
     * @param {EstabelecimentoServiceDeleteArgs} args - Arguments to delete one EstabelecimentoService.
     * @example
     * // Delete one EstabelecimentoService
     * const EstabelecimentoService = await prisma.estabelecimentoService.delete({
     *   where: {
     *     // ... filter to delete one EstabelecimentoService
     *   }
     * })
     * 
     */
    delete<T extends EstabelecimentoServiceDeleteArgs>(args: SelectSubset<T, EstabelecimentoServiceDeleteArgs<ExtArgs>>): Prisma__EstabelecimentoServiceClient<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstabelecimentoService.
     * @param {EstabelecimentoServiceUpdateArgs} args - Arguments to update one EstabelecimentoService.
     * @example
     * // Update one EstabelecimentoService
     * const estabelecimentoService = await prisma.estabelecimentoService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstabelecimentoServiceUpdateArgs>(args: SelectSubset<T, EstabelecimentoServiceUpdateArgs<ExtArgs>>): Prisma__EstabelecimentoServiceClient<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstabelecimentoServices.
     * @param {EstabelecimentoServiceDeleteManyArgs} args - Arguments to filter EstabelecimentoServices to delete.
     * @example
     * // Delete a few EstabelecimentoServices
     * const { count } = await prisma.estabelecimentoService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstabelecimentoServiceDeleteManyArgs>(args?: SelectSubset<T, EstabelecimentoServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstabelecimentoServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstabelecimentoServices
     * const estabelecimentoService = await prisma.estabelecimentoService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstabelecimentoServiceUpdateManyArgs>(args: SelectSubset<T, EstabelecimentoServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstabelecimentoServices and returns the data updated in the database.
     * @param {EstabelecimentoServiceUpdateManyAndReturnArgs} args - Arguments to update many EstabelecimentoServices.
     * @example
     * // Update many EstabelecimentoServices
     * const estabelecimentoService = await prisma.estabelecimentoService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EstabelecimentoServices and only return the `id`
     * const estabelecimentoServiceWithIdOnly = await prisma.estabelecimentoService.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstabelecimentoServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, EstabelecimentoServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EstabelecimentoService.
     * @param {EstabelecimentoServiceUpsertArgs} args - Arguments to update or create a EstabelecimentoService.
     * @example
     * // Update or create a EstabelecimentoService
     * const estabelecimentoService = await prisma.estabelecimentoService.upsert({
     *   create: {
     *     // ... data to create a EstabelecimentoService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstabelecimentoService we want to update
     *   }
     * })
     */
    upsert<T extends EstabelecimentoServiceUpsertArgs>(args: SelectSubset<T, EstabelecimentoServiceUpsertArgs<ExtArgs>>): Prisma__EstabelecimentoServiceClient<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstabelecimentoServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoServiceCountArgs} args - Arguments to filter EstabelecimentoServices to count.
     * @example
     * // Count the number of EstabelecimentoServices
     * const count = await prisma.estabelecimentoService.count({
     *   where: {
     *     // ... the filter for the EstabelecimentoServices we want to count
     *   }
     * })
    **/
    count<T extends EstabelecimentoServiceCountArgs>(
      args?: Subset<T, EstabelecimentoServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstabelecimentoServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstabelecimentoService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstabelecimentoServiceAggregateArgs>(args: Subset<T, EstabelecimentoServiceAggregateArgs>): Prisma.PrismaPromise<GetEstabelecimentoServiceAggregateType<T>>

    /**
     * Group by EstabelecimentoService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoServiceGroupByArgs} args - Group by arguments.
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
      T extends EstabelecimentoServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstabelecimentoServiceGroupByArgs['orderBy'] }
        : { orderBy?: EstabelecimentoServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstabelecimentoServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstabelecimentoServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstabelecimentoService model
   */
  readonly fields: EstabelecimentoServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstabelecimentoService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstabelecimentoServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estabelecimento<T extends EstabelecimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstabelecimentoDefaultArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends EstabelecimentoService$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, EstabelecimentoService$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EstabelecimentoService model
   */
  interface EstabelecimentoServiceFieldRefs {
    readonly id: FieldRef<"EstabelecimentoService", 'String'>
    readonly name: FieldRef<"EstabelecimentoService", 'String'>
    readonly description: FieldRef<"EstabelecimentoService", 'String'>
    readonly imageUrl: FieldRef<"EstabelecimentoService", 'String'>
    readonly price: FieldRef<"EstabelecimentoService", 'Decimal'>
    readonly estabelecimentoId: FieldRef<"EstabelecimentoService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EstabelecimentoService findUnique
   */
  export type EstabelecimentoServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceInclude<ExtArgs> | null
    /**
     * Filter, which EstabelecimentoService to fetch.
     */
    where: EstabelecimentoServiceWhereUniqueInput
  }

  /**
   * EstabelecimentoService findUniqueOrThrow
   */
  export type EstabelecimentoServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceInclude<ExtArgs> | null
    /**
     * Filter, which EstabelecimentoService to fetch.
     */
    where: EstabelecimentoServiceWhereUniqueInput
  }

  /**
   * EstabelecimentoService findFirst
   */
  export type EstabelecimentoServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceInclude<ExtArgs> | null
    /**
     * Filter, which EstabelecimentoService to fetch.
     */
    where?: EstabelecimentoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstabelecimentoServices to fetch.
     */
    orderBy?: EstabelecimentoServiceOrderByWithRelationInput | EstabelecimentoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstabelecimentoServices.
     */
    cursor?: EstabelecimentoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstabelecimentoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstabelecimentoServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstabelecimentoServices.
     */
    distinct?: EstabelecimentoServiceScalarFieldEnum | EstabelecimentoServiceScalarFieldEnum[]
  }

  /**
   * EstabelecimentoService findFirstOrThrow
   */
  export type EstabelecimentoServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceInclude<ExtArgs> | null
    /**
     * Filter, which EstabelecimentoService to fetch.
     */
    where?: EstabelecimentoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstabelecimentoServices to fetch.
     */
    orderBy?: EstabelecimentoServiceOrderByWithRelationInput | EstabelecimentoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstabelecimentoServices.
     */
    cursor?: EstabelecimentoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstabelecimentoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstabelecimentoServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstabelecimentoServices.
     */
    distinct?: EstabelecimentoServiceScalarFieldEnum | EstabelecimentoServiceScalarFieldEnum[]
  }

  /**
   * EstabelecimentoService findMany
   */
  export type EstabelecimentoServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceInclude<ExtArgs> | null
    /**
     * Filter, which EstabelecimentoServices to fetch.
     */
    where?: EstabelecimentoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstabelecimentoServices to fetch.
     */
    orderBy?: EstabelecimentoServiceOrderByWithRelationInput | EstabelecimentoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstabelecimentoServices.
     */
    cursor?: EstabelecimentoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstabelecimentoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstabelecimentoServices.
     */
    skip?: number
    distinct?: EstabelecimentoServiceScalarFieldEnum | EstabelecimentoServiceScalarFieldEnum[]
  }

  /**
   * EstabelecimentoService create
   */
  export type EstabelecimentoServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a EstabelecimentoService.
     */
    data: XOR<EstabelecimentoServiceCreateInput, EstabelecimentoServiceUncheckedCreateInput>
  }

  /**
   * EstabelecimentoService createMany
   */
  export type EstabelecimentoServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstabelecimentoServices.
     */
    data: EstabelecimentoServiceCreateManyInput | EstabelecimentoServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstabelecimentoService createManyAndReturn
   */
  export type EstabelecimentoServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * The data used to create many EstabelecimentoServices.
     */
    data: EstabelecimentoServiceCreateManyInput | EstabelecimentoServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EstabelecimentoService update
   */
  export type EstabelecimentoServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a EstabelecimentoService.
     */
    data: XOR<EstabelecimentoServiceUpdateInput, EstabelecimentoServiceUncheckedUpdateInput>
    /**
     * Choose, which EstabelecimentoService to update.
     */
    where: EstabelecimentoServiceWhereUniqueInput
  }

  /**
   * EstabelecimentoService updateMany
   */
  export type EstabelecimentoServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstabelecimentoServices.
     */
    data: XOR<EstabelecimentoServiceUpdateManyMutationInput, EstabelecimentoServiceUncheckedUpdateManyInput>
    /**
     * Filter which EstabelecimentoServices to update
     */
    where?: EstabelecimentoServiceWhereInput
    /**
     * Limit how many EstabelecimentoServices to update.
     */
    limit?: number
  }

  /**
   * EstabelecimentoService updateManyAndReturn
   */
  export type EstabelecimentoServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * The data used to update EstabelecimentoServices.
     */
    data: XOR<EstabelecimentoServiceUpdateManyMutationInput, EstabelecimentoServiceUncheckedUpdateManyInput>
    /**
     * Filter which EstabelecimentoServices to update
     */
    where?: EstabelecimentoServiceWhereInput
    /**
     * Limit how many EstabelecimentoServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EstabelecimentoService upsert
   */
  export type EstabelecimentoServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the EstabelecimentoService to update in case it exists.
     */
    where: EstabelecimentoServiceWhereUniqueInput
    /**
     * In case the EstabelecimentoService found by the `where` argument doesn't exist, create a new EstabelecimentoService with this data.
     */
    create: XOR<EstabelecimentoServiceCreateInput, EstabelecimentoServiceUncheckedCreateInput>
    /**
     * In case the EstabelecimentoService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstabelecimentoServiceUpdateInput, EstabelecimentoServiceUncheckedUpdateInput>
  }

  /**
   * EstabelecimentoService delete
   */
  export type EstabelecimentoServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceInclude<ExtArgs> | null
    /**
     * Filter which EstabelecimentoService to delete.
     */
    where: EstabelecimentoServiceWhereUniqueInput
  }

  /**
   * EstabelecimentoService deleteMany
   */
  export type EstabelecimentoServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstabelecimentoServices to delete
     */
    where?: EstabelecimentoServiceWhereInput
    /**
     * Limit how many EstabelecimentoServices to delete.
     */
    limit?: number
  }

  /**
   * EstabelecimentoService.bookings
   */
  export type EstabelecimentoService$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * EstabelecimentoService without action
   */
  export type EstabelecimentoServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoService
     */
    select?: EstabelecimentoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstabelecimentoService
     */
    omit?: EstabelecimentoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoServiceInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceId: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceId: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    serviceId: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    serviceId: string
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | EstabelecimentoServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | EstabelecimentoServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | EstabelecimentoServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "serviceId" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | EstabelecimentoServiceDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | EstabelecimentoServiceDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | EstabelecimentoServiceDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      service: Prisma.$EstabelecimentoServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      serviceId: string
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends EstabelecimentoServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstabelecimentoServiceDefaultArgs<ExtArgs>>): Prisma__EstabelecimentoServiceClient<$Result.GetResult<Prisma.$EstabelecimentoServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly serviceId: FieldRef<"Booking", 'String'>
    readonly date: FieldRef<"Booking", 'DateTime'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EstabelecimentoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phones: 'phones',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EstabelecimentoScalarFieldEnum = (typeof EstabelecimentoScalarFieldEnum)[keyof typeof EstabelecimentoScalarFieldEnum]


  export const EstabelecimentoServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    price: 'price',
    estabelecimentoId: 'estabelecimentoId'
  };

  export type EstabelecimentoServiceScalarFieldEnum = (typeof EstabelecimentoServiceScalarFieldEnum)[keyof typeof EstabelecimentoServiceScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    serviceId: 'serviceId',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EstabelecimentoWhereInput = {
    AND?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    OR?: EstabelecimentoWhereInput[]
    NOT?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    id?: StringFilter<"Estabelecimento"> | string
    name?: StringFilter<"Estabelecimento"> | string
    address?: StringFilter<"Estabelecimento"> | string
    phones?: StringNullableListFilter<"Estabelecimento">
    description?: StringFilter<"Estabelecimento"> | string
    imageUrl?: StringFilter<"Estabelecimento"> | string
    createdAt?: DateTimeFilter<"Estabelecimento"> | Date | string
    updatedAt?: DateTimeFilter<"Estabelecimento"> | Date | string
    services?: EstabelecimentoServiceListRelationFilter
  }

  export type EstabelecimentoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phones?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: EstabelecimentoServiceOrderByRelationAggregateInput
  }

  export type EstabelecimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    OR?: EstabelecimentoWhereInput[]
    NOT?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    name?: StringFilter<"Estabelecimento"> | string
    address?: StringFilter<"Estabelecimento"> | string
    phones?: StringNullableListFilter<"Estabelecimento">
    description?: StringFilter<"Estabelecimento"> | string
    imageUrl?: StringFilter<"Estabelecimento"> | string
    createdAt?: DateTimeFilter<"Estabelecimento"> | Date | string
    updatedAt?: DateTimeFilter<"Estabelecimento"> | Date | string
    services?: EstabelecimentoServiceListRelationFilter
  }, "id">

  export type EstabelecimentoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phones?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EstabelecimentoCountOrderByAggregateInput
    _max?: EstabelecimentoMaxOrderByAggregateInput
    _min?: EstabelecimentoMinOrderByAggregateInput
  }

  export type EstabelecimentoScalarWhereWithAggregatesInput = {
    AND?: EstabelecimentoScalarWhereWithAggregatesInput | EstabelecimentoScalarWhereWithAggregatesInput[]
    OR?: EstabelecimentoScalarWhereWithAggregatesInput[]
    NOT?: EstabelecimentoScalarWhereWithAggregatesInput | EstabelecimentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Estabelecimento"> | string
    name?: StringWithAggregatesFilter<"Estabelecimento"> | string
    address?: StringWithAggregatesFilter<"Estabelecimento"> | string
    phones?: StringNullableListFilter<"Estabelecimento">
    description?: StringWithAggregatesFilter<"Estabelecimento"> | string
    imageUrl?: StringWithAggregatesFilter<"Estabelecimento"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Estabelecimento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Estabelecimento"> | Date | string
  }

  export type EstabelecimentoServiceWhereInput = {
    AND?: EstabelecimentoServiceWhereInput | EstabelecimentoServiceWhereInput[]
    OR?: EstabelecimentoServiceWhereInput[]
    NOT?: EstabelecimentoServiceWhereInput | EstabelecimentoServiceWhereInput[]
    id?: StringFilter<"EstabelecimentoService"> | string
    name?: StringFilter<"EstabelecimentoService"> | string
    description?: StringFilter<"EstabelecimentoService"> | string
    imageUrl?: StringFilter<"EstabelecimentoService"> | string
    price?: DecimalFilter<"EstabelecimentoService"> | Decimal | DecimalJsLike | number | string
    estabelecimentoId?: StringFilter<"EstabelecimentoService"> | string
    estabelecimento?: XOR<EstabelecimentoScalarRelationFilter, EstabelecimentoWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type EstabelecimentoServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    estabelecimentoId?: SortOrder
    estabelecimento?: EstabelecimentoOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type EstabelecimentoServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EstabelecimentoServiceWhereInput | EstabelecimentoServiceWhereInput[]
    OR?: EstabelecimentoServiceWhereInput[]
    NOT?: EstabelecimentoServiceWhereInput | EstabelecimentoServiceWhereInput[]
    name?: StringFilter<"EstabelecimentoService"> | string
    description?: StringFilter<"EstabelecimentoService"> | string
    imageUrl?: StringFilter<"EstabelecimentoService"> | string
    price?: DecimalFilter<"EstabelecimentoService"> | Decimal | DecimalJsLike | number | string
    estabelecimentoId?: StringFilter<"EstabelecimentoService"> | string
    estabelecimento?: XOR<EstabelecimentoScalarRelationFilter, EstabelecimentoWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type EstabelecimentoServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    estabelecimentoId?: SortOrder
    _count?: EstabelecimentoServiceCountOrderByAggregateInput
    _avg?: EstabelecimentoServiceAvgOrderByAggregateInput
    _max?: EstabelecimentoServiceMaxOrderByAggregateInput
    _min?: EstabelecimentoServiceMinOrderByAggregateInput
    _sum?: EstabelecimentoServiceSumOrderByAggregateInput
  }

  export type EstabelecimentoServiceScalarWhereWithAggregatesInput = {
    AND?: EstabelecimentoServiceScalarWhereWithAggregatesInput | EstabelecimentoServiceScalarWhereWithAggregatesInput[]
    OR?: EstabelecimentoServiceScalarWhereWithAggregatesInput[]
    NOT?: EstabelecimentoServiceScalarWhereWithAggregatesInput | EstabelecimentoServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EstabelecimentoService"> | string
    name?: StringWithAggregatesFilter<"EstabelecimentoService"> | string
    description?: StringWithAggregatesFilter<"EstabelecimentoService"> | string
    imageUrl?: StringWithAggregatesFilter<"EstabelecimentoService"> | string
    price?: DecimalWithAggregatesFilter<"EstabelecimentoService"> | Decimal | DecimalJsLike | number | string
    estabelecimentoId?: StringWithAggregatesFilter<"EstabelecimentoService"> | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<EstabelecimentoServiceScalarRelationFilter, EstabelecimentoServiceWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    service?: EstabelecimentoServiceOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<EstabelecimentoServiceScalarRelationFilter, EstabelecimentoServiceWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    serviceId?: StringWithAggregatesFilter<"Booking"> | string
    date?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstabelecimentoCreateInput = {
    id?: string
    name: string
    address: string
    phones?: EstabelecimentoCreatephonesInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: EstabelecimentoServiceCreateNestedManyWithoutEstabelecimentoInput
  }

  export type EstabelecimentoUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phones?: EstabelecimentoCreatephonesInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: EstabelecimentoServiceUncheckedCreateNestedManyWithoutEstabelecimentoInput
  }

  export type EstabelecimentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phones?: EstabelecimentoUpdatephonesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: EstabelecimentoServiceUpdateManyWithoutEstabelecimentoNestedInput
  }

  export type EstabelecimentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phones?: EstabelecimentoUpdatephonesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: EstabelecimentoServiceUncheckedUpdateManyWithoutEstabelecimentoNestedInput
  }

  export type EstabelecimentoCreateManyInput = {
    id?: string
    name: string
    address: string
    phones?: EstabelecimentoCreatephonesInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstabelecimentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phones?: EstabelecimentoUpdatephonesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstabelecimentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phones?: EstabelecimentoUpdatephonesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstabelecimentoServiceCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    estabelecimento: EstabelecimentoCreateNestedOneWithoutServicesInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type EstabelecimentoServiceUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    estabelecimentoId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type EstabelecimentoServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estabelecimento?: EstabelecimentoUpdateOneRequiredWithoutServicesNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type EstabelecimentoServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estabelecimentoId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type EstabelecimentoServiceCreateManyInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    estabelecimentoId: string
  }

  export type EstabelecimentoServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EstabelecimentoServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estabelecimentoId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    service: EstabelecimentoServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    serviceId: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    service?: EstabelecimentoServiceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    serviceId: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EstabelecimentoServiceListRelationFilter = {
    every?: EstabelecimentoServiceWhereInput
    some?: EstabelecimentoServiceWhereInput
    none?: EstabelecimentoServiceWhereInput
  }

  export type EstabelecimentoServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstabelecimentoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phones?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstabelecimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstabelecimentoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EstabelecimentoScalarRelationFilter = {
    is?: EstabelecimentoWhereInput
    isNot?: EstabelecimentoWhereInput
  }

  export type EstabelecimentoServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type EstabelecimentoServiceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EstabelecimentoServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type EstabelecimentoServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type EstabelecimentoServiceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EstabelecimentoServiceScalarRelationFilter = {
    is?: EstabelecimentoServiceWhereInput
    isNot?: EstabelecimentoServiceWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type EstabelecimentoCreatephonesInput = {
    set: string[]
  }

  export type EstabelecimentoServiceCreateNestedManyWithoutEstabelecimentoInput = {
    create?: XOR<EstabelecimentoServiceCreateWithoutEstabelecimentoInput, EstabelecimentoServiceUncheckedCreateWithoutEstabelecimentoInput> | EstabelecimentoServiceCreateWithoutEstabelecimentoInput[] | EstabelecimentoServiceUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: EstabelecimentoServiceCreateOrConnectWithoutEstabelecimentoInput | EstabelecimentoServiceCreateOrConnectWithoutEstabelecimentoInput[]
    createMany?: EstabelecimentoServiceCreateManyEstabelecimentoInputEnvelope
    connect?: EstabelecimentoServiceWhereUniqueInput | EstabelecimentoServiceWhereUniqueInput[]
  }

  export type EstabelecimentoServiceUncheckedCreateNestedManyWithoutEstabelecimentoInput = {
    create?: XOR<EstabelecimentoServiceCreateWithoutEstabelecimentoInput, EstabelecimentoServiceUncheckedCreateWithoutEstabelecimentoInput> | EstabelecimentoServiceCreateWithoutEstabelecimentoInput[] | EstabelecimentoServiceUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: EstabelecimentoServiceCreateOrConnectWithoutEstabelecimentoInput | EstabelecimentoServiceCreateOrConnectWithoutEstabelecimentoInput[]
    createMany?: EstabelecimentoServiceCreateManyEstabelecimentoInputEnvelope
    connect?: EstabelecimentoServiceWhereUniqueInput | EstabelecimentoServiceWhereUniqueInput[]
  }

  export type EstabelecimentoUpdatephonesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EstabelecimentoServiceUpdateManyWithoutEstabelecimentoNestedInput = {
    create?: XOR<EstabelecimentoServiceCreateWithoutEstabelecimentoInput, EstabelecimentoServiceUncheckedCreateWithoutEstabelecimentoInput> | EstabelecimentoServiceCreateWithoutEstabelecimentoInput[] | EstabelecimentoServiceUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: EstabelecimentoServiceCreateOrConnectWithoutEstabelecimentoInput | EstabelecimentoServiceCreateOrConnectWithoutEstabelecimentoInput[]
    upsert?: EstabelecimentoServiceUpsertWithWhereUniqueWithoutEstabelecimentoInput | EstabelecimentoServiceUpsertWithWhereUniqueWithoutEstabelecimentoInput[]
    createMany?: EstabelecimentoServiceCreateManyEstabelecimentoInputEnvelope
    set?: EstabelecimentoServiceWhereUniqueInput | EstabelecimentoServiceWhereUniqueInput[]
    disconnect?: EstabelecimentoServiceWhereUniqueInput | EstabelecimentoServiceWhereUniqueInput[]
    delete?: EstabelecimentoServiceWhereUniqueInput | EstabelecimentoServiceWhereUniqueInput[]
    connect?: EstabelecimentoServiceWhereUniqueInput | EstabelecimentoServiceWhereUniqueInput[]
    update?: EstabelecimentoServiceUpdateWithWhereUniqueWithoutEstabelecimentoInput | EstabelecimentoServiceUpdateWithWhereUniqueWithoutEstabelecimentoInput[]
    updateMany?: EstabelecimentoServiceUpdateManyWithWhereWithoutEstabelecimentoInput | EstabelecimentoServiceUpdateManyWithWhereWithoutEstabelecimentoInput[]
    deleteMany?: EstabelecimentoServiceScalarWhereInput | EstabelecimentoServiceScalarWhereInput[]
  }

  export type EstabelecimentoServiceUncheckedUpdateManyWithoutEstabelecimentoNestedInput = {
    create?: XOR<EstabelecimentoServiceCreateWithoutEstabelecimentoInput, EstabelecimentoServiceUncheckedCreateWithoutEstabelecimentoInput> | EstabelecimentoServiceCreateWithoutEstabelecimentoInput[] | EstabelecimentoServiceUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: EstabelecimentoServiceCreateOrConnectWithoutEstabelecimentoInput | EstabelecimentoServiceCreateOrConnectWithoutEstabelecimentoInput[]
    upsert?: EstabelecimentoServiceUpsertWithWhereUniqueWithoutEstabelecimentoInput | EstabelecimentoServiceUpsertWithWhereUniqueWithoutEstabelecimentoInput[]
    createMany?: EstabelecimentoServiceCreateManyEstabelecimentoInputEnvelope
    set?: EstabelecimentoServiceWhereUniqueInput | EstabelecimentoServiceWhereUniqueInput[]
    disconnect?: EstabelecimentoServiceWhereUniqueInput | EstabelecimentoServiceWhereUniqueInput[]
    delete?: EstabelecimentoServiceWhereUniqueInput | EstabelecimentoServiceWhereUniqueInput[]
    connect?: EstabelecimentoServiceWhereUniqueInput | EstabelecimentoServiceWhereUniqueInput[]
    update?: EstabelecimentoServiceUpdateWithWhereUniqueWithoutEstabelecimentoInput | EstabelecimentoServiceUpdateWithWhereUniqueWithoutEstabelecimentoInput[]
    updateMany?: EstabelecimentoServiceUpdateManyWithWhereWithoutEstabelecimentoInput | EstabelecimentoServiceUpdateManyWithWhereWithoutEstabelecimentoInput[]
    deleteMany?: EstabelecimentoServiceScalarWhereInput | EstabelecimentoServiceScalarWhereInput[]
  }

  export type EstabelecimentoCreateNestedOneWithoutServicesInput = {
    create?: XOR<EstabelecimentoCreateWithoutServicesInput, EstabelecimentoUncheckedCreateWithoutServicesInput>
    connectOrCreate?: EstabelecimentoCreateOrConnectWithoutServicesInput
    connect?: EstabelecimentoWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EstabelecimentoUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<EstabelecimentoCreateWithoutServicesInput, EstabelecimentoUncheckedCreateWithoutServicesInput>
    connectOrCreate?: EstabelecimentoCreateOrConnectWithoutServicesInput
    upsert?: EstabelecimentoUpsertWithoutServicesInput
    connect?: EstabelecimentoWhereUniqueInput
    update?: XOR<XOR<EstabelecimentoUpdateToOneWithWhereWithoutServicesInput, EstabelecimentoUpdateWithoutServicesInput>, EstabelecimentoUncheckedUpdateWithoutServicesInput>
  }

  export type BookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type EstabelecimentoServiceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<EstabelecimentoServiceCreateWithoutBookingsInput, EstabelecimentoServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: EstabelecimentoServiceCreateOrConnectWithoutBookingsInput
    connect?: EstabelecimentoServiceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type EstabelecimentoServiceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<EstabelecimentoServiceCreateWithoutBookingsInput, EstabelecimentoServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: EstabelecimentoServiceCreateOrConnectWithoutBookingsInput
    upsert?: EstabelecimentoServiceUpsertWithoutBookingsInput
    connect?: EstabelecimentoServiceWhereUniqueInput
    update?: XOR<XOR<EstabelecimentoServiceUpdateToOneWithWhereWithoutBookingsInput, EstabelecimentoServiceUpdateWithoutBookingsInput>, EstabelecimentoServiceUncheckedUpdateWithoutBookingsInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    service: EstabelecimentoServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    serviceId: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type EstabelecimentoServiceCreateWithoutEstabelecimentoInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type EstabelecimentoServiceUncheckedCreateWithoutEstabelecimentoInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type EstabelecimentoServiceCreateOrConnectWithoutEstabelecimentoInput = {
    where: EstabelecimentoServiceWhereUniqueInput
    create: XOR<EstabelecimentoServiceCreateWithoutEstabelecimentoInput, EstabelecimentoServiceUncheckedCreateWithoutEstabelecimentoInput>
  }

  export type EstabelecimentoServiceCreateManyEstabelecimentoInputEnvelope = {
    data: EstabelecimentoServiceCreateManyEstabelecimentoInput | EstabelecimentoServiceCreateManyEstabelecimentoInput[]
    skipDuplicates?: boolean
  }

  export type EstabelecimentoServiceUpsertWithWhereUniqueWithoutEstabelecimentoInput = {
    where: EstabelecimentoServiceWhereUniqueInput
    update: XOR<EstabelecimentoServiceUpdateWithoutEstabelecimentoInput, EstabelecimentoServiceUncheckedUpdateWithoutEstabelecimentoInput>
    create: XOR<EstabelecimentoServiceCreateWithoutEstabelecimentoInput, EstabelecimentoServiceUncheckedCreateWithoutEstabelecimentoInput>
  }

  export type EstabelecimentoServiceUpdateWithWhereUniqueWithoutEstabelecimentoInput = {
    where: EstabelecimentoServiceWhereUniqueInput
    data: XOR<EstabelecimentoServiceUpdateWithoutEstabelecimentoInput, EstabelecimentoServiceUncheckedUpdateWithoutEstabelecimentoInput>
  }

  export type EstabelecimentoServiceUpdateManyWithWhereWithoutEstabelecimentoInput = {
    where: EstabelecimentoServiceScalarWhereInput
    data: XOR<EstabelecimentoServiceUpdateManyMutationInput, EstabelecimentoServiceUncheckedUpdateManyWithoutEstabelecimentoInput>
  }

  export type EstabelecimentoServiceScalarWhereInput = {
    AND?: EstabelecimentoServiceScalarWhereInput | EstabelecimentoServiceScalarWhereInput[]
    OR?: EstabelecimentoServiceScalarWhereInput[]
    NOT?: EstabelecimentoServiceScalarWhereInput | EstabelecimentoServiceScalarWhereInput[]
    id?: StringFilter<"EstabelecimentoService"> | string
    name?: StringFilter<"EstabelecimentoService"> | string
    description?: StringFilter<"EstabelecimentoService"> | string
    imageUrl?: StringFilter<"EstabelecimentoService"> | string
    price?: DecimalFilter<"EstabelecimentoService"> | Decimal | DecimalJsLike | number | string
    estabelecimentoId?: StringFilter<"EstabelecimentoService"> | string
  }

  export type EstabelecimentoCreateWithoutServicesInput = {
    id?: string
    name: string
    address: string
    phones?: EstabelecimentoCreatephonesInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstabelecimentoUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    address: string
    phones?: EstabelecimentoCreatephonesInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstabelecimentoCreateOrConnectWithoutServicesInput = {
    where: EstabelecimentoWhereUniqueInput
    create: XOR<EstabelecimentoCreateWithoutServicesInput, EstabelecimentoUncheckedCreateWithoutServicesInput>
  }

  export type BookingCreateWithoutServiceInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutServiceInput = {
    id?: string
    userId: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutServiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingCreateManyServiceInputEnvelope = {
    data: BookingCreateManyServiceInput | BookingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type EstabelecimentoUpsertWithoutServicesInput = {
    update: XOR<EstabelecimentoUpdateWithoutServicesInput, EstabelecimentoUncheckedUpdateWithoutServicesInput>
    create: XOR<EstabelecimentoCreateWithoutServicesInput, EstabelecimentoUncheckedCreateWithoutServicesInput>
    where?: EstabelecimentoWhereInput
  }

  export type EstabelecimentoUpdateToOneWithWhereWithoutServicesInput = {
    where?: EstabelecimentoWhereInput
    data: XOR<EstabelecimentoUpdateWithoutServicesInput, EstabelecimentoUncheckedUpdateWithoutServicesInput>
  }

  export type EstabelecimentoUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phones?: EstabelecimentoUpdatephonesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstabelecimentoUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phones?: EstabelecimentoUpdatephonesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
  }

  export type BookingUpdateManyWithWhereWithoutServiceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type EstabelecimentoServiceCreateWithoutBookingsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    estabelecimento: EstabelecimentoCreateNestedOneWithoutServicesInput
  }

  export type EstabelecimentoServiceUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    estabelecimentoId: string
  }

  export type EstabelecimentoServiceCreateOrConnectWithoutBookingsInput = {
    where: EstabelecimentoServiceWhereUniqueInput
    create: XOR<EstabelecimentoServiceCreateWithoutBookingsInput, EstabelecimentoServiceUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstabelecimentoServiceUpsertWithoutBookingsInput = {
    update: XOR<EstabelecimentoServiceUpdateWithoutBookingsInput, EstabelecimentoServiceUncheckedUpdateWithoutBookingsInput>
    create: XOR<EstabelecimentoServiceCreateWithoutBookingsInput, EstabelecimentoServiceUncheckedCreateWithoutBookingsInput>
    where?: EstabelecimentoServiceWhereInput
  }

  export type EstabelecimentoServiceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: EstabelecimentoServiceWhereInput
    data: XOR<EstabelecimentoServiceUpdateWithoutBookingsInput, EstabelecimentoServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type EstabelecimentoServiceUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estabelecimento?: EstabelecimentoUpdateOneRequiredWithoutServicesNestedInput
  }

  export type EstabelecimentoServiceUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estabelecimentoId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyUserInput = {
    id?: string
    serviceId: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: EstabelecimentoServiceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstabelecimentoServiceCreateManyEstabelecimentoInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type EstabelecimentoServiceUpdateWithoutEstabelecimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type EstabelecimentoServiceUncheckedUpdateWithoutEstabelecimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type EstabelecimentoServiceUncheckedUpdateManyWithoutEstabelecimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BookingCreateManyServiceInput = {
    id?: string
    userId: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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