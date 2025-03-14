
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
 * Model VerificationCode
 * 
 */
export type VerificationCode = $Result.DefaultSelection<Prisma.$VerificationCodePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectItem
 * 
 */
export type ProjectItem = $Result.DefaultSelection<Prisma.$ProjectItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectItemTypeEnum: {
  rect: 'rect',
  ellipse: 'ellipse',
  image: 'image',
  line: 'line'
};

export type ProjectItemTypeEnum = (typeof ProjectItemTypeEnum)[keyof typeof ProjectItemTypeEnum]

}

export type ProjectItemTypeEnum = $Enums.ProjectItemTypeEnum

export const ProjectItemTypeEnum: typeof $Enums.ProjectItemTypeEnum

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

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
   * `prisma.verificationCode`: Exposes CRUD operations for the **VerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCode.findMany()
    * ```
    */
  get verificationCode(): Prisma.VerificationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectItem`: Exposes CRUD operations for the **ProjectItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectItems
    * const projectItems = await prisma.projectItem.findMany()
    * ```
    */
  get projectItem(): Prisma.ProjectItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    VerificationCode: 'VerificationCode',
    Project: 'Project',
    ProjectItem: 'ProjectItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "verificationCode" | "project" | "projectItem"
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
      VerificationCode: {
        payload: Prisma.$VerificationCodePayload<ExtArgs>
        fields: Prisma.VerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findFirst: {
            args: Prisma.VerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findMany: {
            args: Prisma.VerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          create: {
            args: Prisma.VerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          createMany: {
            args: Prisma.VerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          delete: {
            args: Prisma.VerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          update: {
            args: Prisma.VerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          upsert: {
            args: Prisma.VerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          aggregate: {
            args: Prisma.VerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCode>
          }
          groupBy: {
            args: Prisma.VerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectItem: {
        payload: Prisma.$ProjectItemPayload<ExtArgs>
        fields: Prisma.ProjectItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          findFirst: {
            args: Prisma.ProjectItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          findMany: {
            args: Prisma.ProjectItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>[]
          }
          create: {
            args: Prisma.ProjectItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          createMany: {
            args: Prisma.ProjectItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>[]
          }
          delete: {
            args: Prisma.ProjectItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          update: {
            args: Prisma.ProjectItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          deleteMany: {
            args: Prisma.ProjectItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>[]
          }
          upsert: {
            args: Prisma.ProjectItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectItemPayload>
          }
          aggregate: {
            args: Prisma.ProjectItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectItem>
          }
          groupBy: {
            args: Prisma.ProjectItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectItemCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectItemCountAggregateOutputType> | number
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
    verificationCode?: VerificationCodeOmit
    project?: ProjectOmit
    projectItem?: ProjectItemOmit
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
    VerificationCode: number
    Project: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VerificationCode?: boolean | UserCountOutputTypeCountVerificationCodeArgs
    Project?: boolean | UserCountOutputTypeCountProjectArgs
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
  export type UserCountOutputTypeCountVerificationCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    items: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ProjectCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectItemWhereInput
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
    name: string | null
    email: string | null
    password: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isVerified?: true
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
    name: string
    email: string
    password: string
    isVerified: boolean
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
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    VerificationCode?: boolean | User$VerificationCodeArgs<ExtArgs>
    Project?: boolean | User$ProjectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VerificationCode?: boolean | User$VerificationCodeArgs<ExtArgs>
    Project?: boolean | User$ProjectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      VerificationCode: Prisma.$VerificationCodePayload<ExtArgs>[]
      Project: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      isVerified: boolean
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

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    VerificationCode<T extends User$VerificationCodeArgs<ExtArgs> = {}>(args?: Subset<T, User$VerificationCodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Project<T extends User$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
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
   * User.VerificationCode
   */
  export type User$VerificationCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    cursor?: VerificationCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * User.Project
   */
  export type User$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
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
   * Model VerificationCode
   */

  export type AggregateVerificationCode = {
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  export type VerificationCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type VerificationCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type VerificationCodeCountAggregateOutputType = {
    id: number
    code: number
    expiresAt: number
    userId: number
    createdAt: number
    _all: number
  }


  export type VerificationCodeMinAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type VerificationCodeMaxAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type VerificationCodeCountAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCode to aggregate.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type GetVerificationCodeAggregateType<T extends VerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCode[P]>
      : GetScalarType<T[P], AggregateVerificationCode[P]>
  }




  export type VerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithAggregationInput | VerificationCodeOrderByWithAggregationInput[]
    by: VerificationCodeScalarFieldEnum[] | VerificationCodeScalarFieldEnum
    having?: VerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodeCountAggregateInputType | true
    _min?: VerificationCodeMinAggregateInputType
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type VerificationCodeGroupByOutputType = {
    id: string
    code: string
    expiresAt: Date
    userId: string
    createdAt: Date
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  type GetVerificationCodeGroupByPayload<T extends VerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectScalar = {
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type VerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "expiresAt" | "userId" | "createdAt", ExtArgs["result"]["verificationCode"]>
  export type VerificationCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      expiresAt: Date
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["verificationCode"]>
    composites: {}
  }

  type VerificationCodeGetPayload<S extends boolean | null | undefined | VerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodePayload, S>

  type VerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodeCountAggregateInputType | true
    }

  export interface VerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCode'], meta: { name: 'VerificationCode' } }
    /**
     * Find zero or one VerificationCode that matches the filter.
     * @param {VerificationCodeFindUniqueArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodeFindUniqueArgs>(args: SelectSubset<T, VerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one VerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first VerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodeFindFirstArgs>(args?: SelectSubset<T, VerificationCodeFindFirstArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first VerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationCodeFindManyArgs>(args?: SelectSubset<T, VerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a VerificationCode.
     * @param {VerificationCodeCreateArgs} args - Arguments to create a VerificationCode.
     * @example
     * // Create one VerificationCode
     * const VerificationCode = await prisma.verificationCode.create({
     *   data: {
     *     // ... data to create a VerificationCode
     *   }
     * })
     * 
     */
    create<T extends VerificationCodeCreateArgs>(args: SelectSubset<T, VerificationCodeCreateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodeCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodeCreateManyArgs>(args?: SelectSubset<T, VerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationCodes and returns the data saved in the database.
     * @param {VerificationCodeCreateManyAndReturnArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a VerificationCode.
     * @param {VerificationCodeDeleteArgs} args - Arguments to delete one VerificationCode.
     * @example
     * // Delete one VerificationCode
     * const VerificationCode = await prisma.verificationCode.delete({
     *   where: {
     *     // ... filter to delete one VerificationCode
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodeDeleteArgs>(args: SelectSubset<T, VerificationCodeDeleteArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one VerificationCode.
     * @param {VerificationCodeUpdateArgs} args - Arguments to update one VerificationCode.
     * @example
     * // Update one VerificationCode
     * const verificationCode = await prisma.verificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodeUpdateArgs>(args: SelectSubset<T, VerificationCodeUpdateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodeDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodeDeleteManyArgs>(args?: SelectSubset<T, VerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodeUpdateManyArgs>(args: SelectSubset<T, VerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes and returns the data updated in the database.
     * @param {VerificationCodeUpdateManyAndReturnArgs} args - Arguments to update many VerificationCodes.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one VerificationCode.
     * @param {VerificationCodeUpsertArgs} args - Arguments to update or create a VerificationCode.
     * @example
     * // Update or create a VerificationCode
     * const verificationCode = await prisma.verificationCode.upsert({
     *   create: {
     *     // ... data to create a VerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodeUpsertArgs>(args: SelectSubset<T, VerificationCodeUpsertArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCode.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodeCountArgs>(
      args?: Subset<T, VerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationCodeAggregateArgs>(args: Subset<T, VerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodeAggregateType<T>>

    /**
     * Group by VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeGroupByArgs} args - Group by arguments.
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
      T extends VerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCode model
   */
  readonly fields: VerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the VerificationCode model
   */ 
  interface VerificationCodeFieldRefs {
    readonly id: FieldRef<"VerificationCode", 'String'>
    readonly code: FieldRef<"VerificationCode", 'String'>
    readonly expiresAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly userId: FieldRef<"VerificationCode", 'String'>
    readonly createdAt: FieldRef<"VerificationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCode findUnique
   */
  export type VerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findUniqueOrThrow
   */
  export type VerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findFirst
   */
  export type VerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findFirstOrThrow
   */
  export type VerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findMany
   */
  export type VerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode create
   */
  export type VerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationCode.
     */
    data: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
  }

  /**
   * VerificationCode createMany
   */
  export type VerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCode createManyAndReturn
   */
  export type VerificationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCode update
   */
  export type VerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationCode.
     */
    data: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which VerificationCode to update.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode updateMany
   */
  export type VerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode updateManyAndReturn
   */
  export type VerificationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCode upsert
   */
  export type VerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationCode to update in case it exists.
     */
    where: VerificationCodeWhereUniqueInput
    /**
     * In case the VerificationCode found by the `where` argument doesn't exist, create a new VerificationCode with this data.
     */
    create: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
    /**
     * In case the VerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
  }

  /**
   * VerificationCode delete
   */
  export type VerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter which VerificationCode to delete.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode deleteMany
   */
  export type VerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCode without action
   */
  export type VerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    canvasWidth: number | null
    canvasHeight: number | null
  }

  export type ProjectSumAggregateOutputType = {
    canvasWidth: number | null
    canvasHeight: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    canvasWidth: number | null
    canvasHeight: number | null
    isPublished: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    canvasWidth: number | null
    canvasHeight: number | null
    isPublished: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    canvasWidth: number
    canvasHeight: number
    isPublished: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    canvasWidth?: true
    canvasHeight?: true
  }

  export type ProjectSumAggregateInputType = {
    canvasWidth?: true
    canvasHeight?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    canvasWidth?: true
    canvasHeight?: true
    isPublished?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    canvasWidth?: true
    canvasHeight?: true
    isPublished?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    canvasWidth?: true
    canvasHeight?: true
    isPublished?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    imageUrl: string | null
    canvasWidth: number
    canvasHeight: number
    isPublished: boolean | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    canvasWidth?: boolean
    canvasHeight?: boolean
    isPublished?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Project$itemsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    canvasWidth?: boolean
    canvasHeight?: boolean
    isPublished?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    canvasWidth?: boolean
    canvasHeight?: boolean
    isPublished?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    canvasWidth?: boolean
    canvasHeight?: boolean
    isPublished?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imageUrl" | "canvasWidth" | "canvasHeight" | "isPublished" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Project$itemsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$ProjectItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      imageUrl: string | null
      canvasWidth: number
      canvasHeight: number
      isPublished: boolean | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    items<T extends Project$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Project$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly imageUrl: FieldRef<"Project", 'String'>
    readonly canvasWidth: FieldRef<"Project", 'Float'>
    readonly canvasHeight: FieldRef<"Project", 'Float'>
    readonly isPublished: FieldRef<"Project", 'Boolean'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.items
   */
  export type Project$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    where?: ProjectItemWhereInput
    orderBy?: ProjectItemOrderByWithRelationInput | ProjectItemOrderByWithRelationInput[]
    cursor?: ProjectItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectItemScalarFieldEnum | ProjectItemScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectItem
   */

  export type AggregateProjectItem = {
    _count: ProjectItemCountAggregateOutputType | null
    _avg: ProjectItemAvgAggregateOutputType | null
    _sum: ProjectItemSumAggregateOutputType | null
    _min: ProjectItemMinAggregateOutputType | null
    _max: ProjectItemMaxAggregateOutputType | null
  }

  export type ProjectItemAvgAggregateOutputType = {
    floor: number | null
    top: number | null
    left: number | null
    width: number | null
    height: number | null
    radius: number | null
    strokeWidth: number | null
    angle: number | null
    scaleX: number | null
    scaleY: number | null
  }

  export type ProjectItemSumAggregateOutputType = {
    floor: number | null
    top: number | null
    left: number | null
    width: number | null
    height: number | null
    radius: number | null
    strokeWidth: number | null
    angle: number | null
    scaleX: number | null
    scaleY: number | null
  }

  export type ProjectItemMinAggregateOutputType = {
    id: string | null
    canvasId: string | null
    name: string | null
    desc: string | null
    shortDesc: string | null
    time: string | null
    floor: number | null
    link: string | null
    placeColor: string | null
    top: number | null
    left: number | null
    originX: string | null
    originY: string | null
    width: number | null
    height: number | null
    imageUrl: string | null
    radius: number | null
    fill: string | null
    strokeWidth: number | null
    stroke: string | null
    locked: boolean | null
    type: $Enums.ProjectItemTypeEnum | null
    angle: number | null
    scaleX: number | null
    scaleY: number | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectItemMaxAggregateOutputType = {
    id: string | null
    canvasId: string | null
    name: string | null
    desc: string | null
    shortDesc: string | null
    time: string | null
    floor: number | null
    link: string | null
    placeColor: string | null
    top: number | null
    left: number | null
    originX: string | null
    originY: string | null
    width: number | null
    height: number | null
    imageUrl: string | null
    radius: number | null
    fill: string | null
    strokeWidth: number | null
    stroke: string | null
    locked: boolean | null
    type: $Enums.ProjectItemTypeEnum | null
    angle: number | null
    scaleX: number | null
    scaleY: number | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectItemCountAggregateOutputType = {
    id: number
    canvasId: number
    name: number
    desc: number
    shortDesc: number
    time: number
    floor: number
    link: number
    placeColor: number
    top: number
    left: number
    originX: number
    originY: number
    width: number
    height: number
    imageUrl: number
    radius: number
    fill: number
    strokeWidth: number
    stroke: number
    locked: number
    type: number
    angle: number
    scaleX: number
    scaleY: number
    projectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectItemAvgAggregateInputType = {
    floor?: true
    top?: true
    left?: true
    width?: true
    height?: true
    radius?: true
    strokeWidth?: true
    angle?: true
    scaleX?: true
    scaleY?: true
  }

  export type ProjectItemSumAggregateInputType = {
    floor?: true
    top?: true
    left?: true
    width?: true
    height?: true
    radius?: true
    strokeWidth?: true
    angle?: true
    scaleX?: true
    scaleY?: true
  }

  export type ProjectItemMinAggregateInputType = {
    id?: true
    canvasId?: true
    name?: true
    desc?: true
    shortDesc?: true
    time?: true
    floor?: true
    link?: true
    placeColor?: true
    top?: true
    left?: true
    originX?: true
    originY?: true
    width?: true
    height?: true
    imageUrl?: true
    radius?: true
    fill?: true
    strokeWidth?: true
    stroke?: true
    locked?: true
    type?: true
    angle?: true
    scaleX?: true
    scaleY?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectItemMaxAggregateInputType = {
    id?: true
    canvasId?: true
    name?: true
    desc?: true
    shortDesc?: true
    time?: true
    floor?: true
    link?: true
    placeColor?: true
    top?: true
    left?: true
    originX?: true
    originY?: true
    width?: true
    height?: true
    imageUrl?: true
    radius?: true
    fill?: true
    strokeWidth?: true
    stroke?: true
    locked?: true
    type?: true
    angle?: true
    scaleX?: true
    scaleY?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectItemCountAggregateInputType = {
    id?: true
    canvasId?: true
    name?: true
    desc?: true
    shortDesc?: true
    time?: true
    floor?: true
    link?: true
    placeColor?: true
    top?: true
    left?: true
    originX?: true
    originY?: true
    width?: true
    height?: true
    imageUrl?: true
    radius?: true
    fill?: true
    strokeWidth?: true
    stroke?: true
    locked?: true
    type?: true
    angle?: true
    scaleX?: true
    scaleY?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectItem to aggregate.
     */
    where?: ProjectItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectItems to fetch.
     */
    orderBy?: ProjectItemOrderByWithRelationInput | ProjectItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectItems
    **/
    _count?: true | ProjectItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectItemMaxAggregateInputType
  }

  export type GetProjectItemAggregateType<T extends ProjectItemAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectItem[P]>
      : GetScalarType<T[P], AggregateProjectItem[P]>
  }




  export type ProjectItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectItemWhereInput
    orderBy?: ProjectItemOrderByWithAggregationInput | ProjectItemOrderByWithAggregationInput[]
    by: ProjectItemScalarFieldEnum[] | ProjectItemScalarFieldEnum
    having?: ProjectItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectItemCountAggregateInputType | true
    _avg?: ProjectItemAvgAggregateInputType
    _sum?: ProjectItemSumAggregateInputType
    _min?: ProjectItemMinAggregateInputType
    _max?: ProjectItemMaxAggregateInputType
  }

  export type ProjectItemGroupByOutputType = {
    id: string
    canvasId: string
    name: string
    desc: string | null
    shortDesc: string | null
    time: string | null
    floor: number | null
    link: string | null
    placeColor: string
    top: number
    left: number
    originX: string
    originY: string
    width: number | null
    height: number | null
    imageUrl: string | null
    radius: number | null
    fill: string
    strokeWidth: number
    stroke: string | null
    locked: boolean
    type: $Enums.ProjectItemTypeEnum
    angle: number
    scaleX: number
    scaleY: number
    projectId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectItemCountAggregateOutputType | null
    _avg: ProjectItemAvgAggregateOutputType | null
    _sum: ProjectItemSumAggregateOutputType | null
    _min: ProjectItemMinAggregateOutputType | null
    _max: ProjectItemMaxAggregateOutputType | null
  }

  type GetProjectItemGroupByPayload<T extends ProjectItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectItemGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectItemGroupByOutputType[P]>
        }
      >
    >


  export type ProjectItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canvasId?: boolean
    name?: boolean
    desc?: boolean
    shortDesc?: boolean
    time?: boolean
    floor?: boolean
    link?: boolean
    placeColor?: boolean
    top?: boolean
    left?: boolean
    originX?: boolean
    originY?: boolean
    width?: boolean
    height?: boolean
    imageUrl?: boolean
    radius?: boolean
    fill?: boolean
    strokeWidth?: boolean
    stroke?: boolean
    locked?: boolean
    type?: boolean
    angle?: boolean
    scaleX?: boolean
    scaleY?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectItem"]>

  export type ProjectItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canvasId?: boolean
    name?: boolean
    desc?: boolean
    shortDesc?: boolean
    time?: boolean
    floor?: boolean
    link?: boolean
    placeColor?: boolean
    top?: boolean
    left?: boolean
    originX?: boolean
    originY?: boolean
    width?: boolean
    height?: boolean
    imageUrl?: boolean
    radius?: boolean
    fill?: boolean
    strokeWidth?: boolean
    stroke?: boolean
    locked?: boolean
    type?: boolean
    angle?: boolean
    scaleX?: boolean
    scaleY?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectItem"]>

  export type ProjectItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canvasId?: boolean
    name?: boolean
    desc?: boolean
    shortDesc?: boolean
    time?: boolean
    floor?: boolean
    link?: boolean
    placeColor?: boolean
    top?: boolean
    left?: boolean
    originX?: boolean
    originY?: boolean
    width?: boolean
    height?: boolean
    imageUrl?: boolean
    radius?: boolean
    fill?: boolean
    strokeWidth?: boolean
    stroke?: boolean
    locked?: boolean
    type?: boolean
    angle?: boolean
    scaleX?: boolean
    scaleY?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectItem"]>

  export type ProjectItemSelectScalar = {
    id?: boolean
    canvasId?: boolean
    name?: boolean
    desc?: boolean
    shortDesc?: boolean
    time?: boolean
    floor?: boolean
    link?: boolean
    placeColor?: boolean
    top?: boolean
    left?: boolean
    originX?: boolean
    originY?: boolean
    width?: boolean
    height?: boolean
    imageUrl?: boolean
    radius?: boolean
    fill?: boolean
    strokeWidth?: boolean
    stroke?: boolean
    locked?: boolean
    type?: boolean
    angle?: boolean
    scaleX?: boolean
    scaleY?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "canvasId" | "name" | "desc" | "shortDesc" | "time" | "floor" | "link" | "placeColor" | "top" | "left" | "originX" | "originY" | "width" | "height" | "imageUrl" | "radius" | "fill" | "strokeWidth" | "stroke" | "locked" | "type" | "angle" | "scaleX" | "scaleY" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["projectItem"]>
  export type ProjectItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectItem"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      canvasId: string
      name: string
      desc: string | null
      shortDesc: string | null
      time: string | null
      floor: number | null
      link: string | null
      placeColor: string
      top: number
      left: number
      originX: string
      originY: string
      width: number | null
      height: number | null
      imageUrl: string | null
      radius: number | null
      fill: string
      strokeWidth: number
      stroke: string | null
      locked: boolean
      type: $Enums.ProjectItemTypeEnum
      angle: number
      scaleX: number
      scaleY: number
      projectId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectItem"]>
    composites: {}
  }

  type ProjectItemGetPayload<S extends boolean | null | undefined | ProjectItemDefaultArgs> = $Result.GetResult<Prisma.$ProjectItemPayload, S>

  type ProjectItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectItemCountAggregateInputType | true
    }

  export interface ProjectItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectItem'], meta: { name: 'ProjectItem' } }
    /**
     * Find zero or one ProjectItem that matches the filter.
     * @param {ProjectItemFindUniqueArgs} args - Arguments to find a ProjectItem
     * @example
     * // Get one ProjectItem
     * const projectItem = await prisma.projectItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectItemFindUniqueArgs>(args: SelectSubset<T, ProjectItemFindUniqueArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProjectItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectItemFindUniqueOrThrowArgs} args - Arguments to find a ProjectItem
     * @example
     * // Get one ProjectItem
     * const projectItem = await prisma.projectItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProjectItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemFindFirstArgs} args - Arguments to find a ProjectItem
     * @example
     * // Get one ProjectItem
     * const projectItem = await prisma.projectItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectItemFindFirstArgs>(args?: SelectSubset<T, ProjectItemFindFirstArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProjectItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemFindFirstOrThrowArgs} args - Arguments to find a ProjectItem
     * @example
     * // Get one ProjectItem
     * const projectItem = await prisma.projectItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProjectItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectItems
     * const projectItems = await prisma.projectItem.findMany()
     * 
     * // Get first 10 ProjectItems
     * const projectItems = await prisma.projectItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectItemWithIdOnly = await prisma.projectItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectItemFindManyArgs>(args?: SelectSubset<T, ProjectItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProjectItem.
     * @param {ProjectItemCreateArgs} args - Arguments to create a ProjectItem.
     * @example
     * // Create one ProjectItem
     * const ProjectItem = await prisma.projectItem.create({
     *   data: {
     *     // ... data to create a ProjectItem
     *   }
     * })
     * 
     */
    create<T extends ProjectItemCreateArgs>(args: SelectSubset<T, ProjectItemCreateArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProjectItems.
     * @param {ProjectItemCreateManyArgs} args - Arguments to create many ProjectItems.
     * @example
     * // Create many ProjectItems
     * const projectItem = await prisma.projectItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectItemCreateManyArgs>(args?: SelectSubset<T, ProjectItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectItems and returns the data saved in the database.
     * @param {ProjectItemCreateManyAndReturnArgs} args - Arguments to create many ProjectItems.
     * @example
     * // Create many ProjectItems
     * const projectItem = await prisma.projectItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectItems and only return the `id`
     * const projectItemWithIdOnly = await prisma.projectItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProjectItem.
     * @param {ProjectItemDeleteArgs} args - Arguments to delete one ProjectItem.
     * @example
     * // Delete one ProjectItem
     * const ProjectItem = await prisma.projectItem.delete({
     *   where: {
     *     // ... filter to delete one ProjectItem
     *   }
     * })
     * 
     */
    delete<T extends ProjectItemDeleteArgs>(args: SelectSubset<T, ProjectItemDeleteArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProjectItem.
     * @param {ProjectItemUpdateArgs} args - Arguments to update one ProjectItem.
     * @example
     * // Update one ProjectItem
     * const projectItem = await prisma.projectItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectItemUpdateArgs>(args: SelectSubset<T, ProjectItemUpdateArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProjectItems.
     * @param {ProjectItemDeleteManyArgs} args - Arguments to filter ProjectItems to delete.
     * @example
     * // Delete a few ProjectItems
     * const { count } = await prisma.projectItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectItemDeleteManyArgs>(args?: SelectSubset<T, ProjectItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectItems
     * const projectItem = await prisma.projectItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectItemUpdateManyArgs>(args: SelectSubset<T, ProjectItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectItems and returns the data updated in the database.
     * @param {ProjectItemUpdateManyAndReturnArgs} args - Arguments to update many ProjectItems.
     * @example
     * // Update many ProjectItems
     * const projectItem = await prisma.projectItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectItems and only return the `id`
     * const projectItemWithIdOnly = await prisma.projectItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProjectItem.
     * @param {ProjectItemUpsertArgs} args - Arguments to update or create a ProjectItem.
     * @example
     * // Update or create a ProjectItem
     * const projectItem = await prisma.projectItem.upsert({
     *   create: {
     *     // ... data to create a ProjectItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectItem we want to update
     *   }
     * })
     */
    upsert<T extends ProjectItemUpsertArgs>(args: SelectSubset<T, ProjectItemUpsertArgs<ExtArgs>>): Prisma__ProjectItemClient<$Result.GetResult<Prisma.$ProjectItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProjectItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemCountArgs} args - Arguments to filter ProjectItems to count.
     * @example
     * // Count the number of ProjectItems
     * const count = await prisma.projectItem.count({
     *   where: {
     *     // ... the filter for the ProjectItems we want to count
     *   }
     * })
    **/
    count<T extends ProjectItemCountArgs>(
      args?: Subset<T, ProjectItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectItemAggregateArgs>(args: Subset<T, ProjectItemAggregateArgs>): Prisma.PrismaPromise<GetProjectItemAggregateType<T>>

    /**
     * Group by ProjectItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectItemGroupByArgs} args - Group by arguments.
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
      T extends ProjectItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectItemGroupByArgs['orderBy'] }
        : { orderBy?: ProjectItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectItem model
   */
  readonly fields: ProjectItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the ProjectItem model
   */ 
  interface ProjectItemFieldRefs {
    readonly id: FieldRef<"ProjectItem", 'String'>
    readonly canvasId: FieldRef<"ProjectItem", 'String'>
    readonly name: FieldRef<"ProjectItem", 'String'>
    readonly desc: FieldRef<"ProjectItem", 'String'>
    readonly shortDesc: FieldRef<"ProjectItem", 'String'>
    readonly time: FieldRef<"ProjectItem", 'String'>
    readonly floor: FieldRef<"ProjectItem", 'Int'>
    readonly link: FieldRef<"ProjectItem", 'String'>
    readonly placeColor: FieldRef<"ProjectItem", 'String'>
    readonly top: FieldRef<"ProjectItem", 'Float'>
    readonly left: FieldRef<"ProjectItem", 'Float'>
    readonly originX: FieldRef<"ProjectItem", 'String'>
    readonly originY: FieldRef<"ProjectItem", 'String'>
    readonly width: FieldRef<"ProjectItem", 'Float'>
    readonly height: FieldRef<"ProjectItem", 'Float'>
    readonly imageUrl: FieldRef<"ProjectItem", 'String'>
    readonly radius: FieldRef<"ProjectItem", 'Float'>
    readonly fill: FieldRef<"ProjectItem", 'String'>
    readonly strokeWidth: FieldRef<"ProjectItem", 'Float'>
    readonly stroke: FieldRef<"ProjectItem", 'String'>
    readonly locked: FieldRef<"ProjectItem", 'Boolean'>
    readonly type: FieldRef<"ProjectItem", 'ProjectItemTypeEnum'>
    readonly angle: FieldRef<"ProjectItem", 'Float'>
    readonly scaleX: FieldRef<"ProjectItem", 'Float'>
    readonly scaleY: FieldRef<"ProjectItem", 'Float'>
    readonly projectId: FieldRef<"ProjectItem", 'String'>
    readonly createdAt: FieldRef<"ProjectItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectItem findUnique
   */
  export type ProjectItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectItem to fetch.
     */
    where: ProjectItemWhereUniqueInput
  }

  /**
   * ProjectItem findUniqueOrThrow
   */
  export type ProjectItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectItem to fetch.
     */
    where: ProjectItemWhereUniqueInput
  }

  /**
   * ProjectItem findFirst
   */
  export type ProjectItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectItem to fetch.
     */
    where?: ProjectItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectItems to fetch.
     */
    orderBy?: ProjectItemOrderByWithRelationInput | ProjectItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectItems.
     */
    cursor?: ProjectItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectItems.
     */
    distinct?: ProjectItemScalarFieldEnum | ProjectItemScalarFieldEnum[]
  }

  /**
   * ProjectItem findFirstOrThrow
   */
  export type ProjectItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectItem to fetch.
     */
    where?: ProjectItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectItems to fetch.
     */
    orderBy?: ProjectItemOrderByWithRelationInput | ProjectItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectItems.
     */
    cursor?: ProjectItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectItems.
     */
    distinct?: ProjectItemScalarFieldEnum | ProjectItemScalarFieldEnum[]
  }

  /**
   * ProjectItem findMany
   */
  export type ProjectItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter, which ProjectItems to fetch.
     */
    where?: ProjectItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectItems to fetch.
     */
    orderBy?: ProjectItemOrderByWithRelationInput | ProjectItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectItems.
     */
    cursor?: ProjectItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectItems.
     */
    skip?: number
    distinct?: ProjectItemScalarFieldEnum | ProjectItemScalarFieldEnum[]
  }

  /**
   * ProjectItem create
   */
  export type ProjectItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectItem.
     */
    data: XOR<ProjectItemCreateInput, ProjectItemUncheckedCreateInput>
  }

  /**
   * ProjectItem createMany
   */
  export type ProjectItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectItems.
     */
    data: ProjectItemCreateManyInput | ProjectItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectItem createManyAndReturn
   */
  export type ProjectItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectItems.
     */
    data: ProjectItemCreateManyInput | ProjectItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectItem update
   */
  export type ProjectItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectItem.
     */
    data: XOR<ProjectItemUpdateInput, ProjectItemUncheckedUpdateInput>
    /**
     * Choose, which ProjectItem to update.
     */
    where: ProjectItemWhereUniqueInput
  }

  /**
   * ProjectItem updateMany
   */
  export type ProjectItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectItems.
     */
    data: XOR<ProjectItemUpdateManyMutationInput, ProjectItemUncheckedUpdateManyInput>
    /**
     * Filter which ProjectItems to update
     */
    where?: ProjectItemWhereInput
    /**
     * Limit how many ProjectItems to update.
     */
    limit?: number
  }

  /**
   * ProjectItem updateManyAndReturn
   */
  export type ProjectItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * The data used to update ProjectItems.
     */
    data: XOR<ProjectItemUpdateManyMutationInput, ProjectItemUncheckedUpdateManyInput>
    /**
     * Filter which ProjectItems to update
     */
    where?: ProjectItemWhereInput
    /**
     * Limit how many ProjectItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectItem upsert
   */
  export type ProjectItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectItem to update in case it exists.
     */
    where: ProjectItemWhereUniqueInput
    /**
     * In case the ProjectItem found by the `where` argument doesn't exist, create a new ProjectItem with this data.
     */
    create: XOR<ProjectItemCreateInput, ProjectItemUncheckedCreateInput>
    /**
     * In case the ProjectItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectItemUpdateInput, ProjectItemUncheckedUpdateInput>
  }

  /**
   * ProjectItem delete
   */
  export type ProjectItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
    /**
     * Filter which ProjectItem to delete.
     */
    where: ProjectItemWhereUniqueInput
  }

  /**
   * ProjectItem deleteMany
   */
  export type ProjectItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectItems to delete
     */
    where?: ProjectItemWhereInput
    /**
     * Limit how many ProjectItems to delete.
     */
    limit?: number
  }

  /**
   * ProjectItem without action
   */
  export type ProjectItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectItem
     */
    select?: ProjectItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectItem
     */
    omit?: ProjectItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectItemInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type VerificationCodeScalarFieldEnum = (typeof VerificationCodeScalarFieldEnum)[keyof typeof VerificationCodeScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    canvasWidth: 'canvasWidth',
    canvasHeight: 'canvasHeight',
    isPublished: 'isPublished',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectItemScalarFieldEnum: {
    id: 'id',
    canvasId: 'canvasId',
    name: 'name',
    desc: 'desc',
    shortDesc: 'shortDesc',
    time: 'time',
    floor: 'floor',
    link: 'link',
    placeColor: 'placeColor',
    top: 'top',
    left: 'left',
    originX: 'originX',
    originY: 'originY',
    width: 'width',
    height: 'height',
    imageUrl: 'imageUrl',
    radius: 'radius',
    fill: 'fill',
    strokeWidth: 'strokeWidth',
    stroke: 'stroke',
    locked: 'locked',
    type: 'type',
    angle: 'angle',
    scaleX: 'scaleX',
    scaleY: 'scaleY',
    projectId: 'projectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectItemScalarFieldEnum = (typeof ProjectItemScalarFieldEnum)[keyof typeof ProjectItemScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProjectItemTypeEnum'
   */
  export type EnumProjectItemTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectItemTypeEnum'>
    


  /**
   * Reference to a field of type 'ProjectItemTypeEnum[]'
   */
  export type ListEnumProjectItemTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectItemTypeEnum[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    VerificationCode?: VerificationCodeListRelationFilter
    Project?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    VerificationCode?: VerificationCodeOrderByRelationAggregateInput
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    VerificationCode?: VerificationCodeListRelationFilter
    Project?: ProjectListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationCodeWhereInput = {
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    id?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    userId?: StringFilter<"VerificationCode"> | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    code?: StringFilter<"VerificationCode"> | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    userId?: StringFilter<"VerificationCode"> | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VerificationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: VerificationCodeCountOrderByAggregateInput
    _max?: VerificationCodeMaxOrderByAggregateInput
    _min?: VerificationCodeMinOrderByAggregateInput
  }

  export type VerificationCodeScalarWhereWithAggregatesInput = {
    AND?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    OR?: VerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationCode"> | string
    code?: StringWithAggregatesFilter<"VerificationCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    userId?: StringWithAggregatesFilter<"VerificationCode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    imageUrl?: StringNullableFilter<"Project"> | string | null
    canvasWidth?: FloatFilter<"Project"> | number
    canvasHeight?: FloatFilter<"Project"> | number
    isPublished?: BoolNullableFilter<"Project"> | boolean | null
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ProjectItemListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
    isPublished?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: ProjectItemOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    imageUrl?: StringNullableFilter<"Project"> | string | null
    canvasWidth?: FloatFilter<"Project"> | number
    canvasHeight?: FloatFilter<"Project"> | number
    isPublished?: BoolNullableFilter<"Project"> | boolean | null
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: ProjectItemListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
    isPublished?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    canvasWidth?: FloatWithAggregatesFilter<"Project"> | number
    canvasHeight?: FloatWithAggregatesFilter<"Project"> | number
    isPublished?: BoolNullableWithAggregatesFilter<"Project"> | boolean | null
    userId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectItemWhereInput = {
    AND?: ProjectItemWhereInput | ProjectItemWhereInput[]
    OR?: ProjectItemWhereInput[]
    NOT?: ProjectItemWhereInput | ProjectItemWhereInput[]
    id?: StringFilter<"ProjectItem"> | string
    canvasId?: StringFilter<"ProjectItem"> | string
    name?: StringFilter<"ProjectItem"> | string
    desc?: StringNullableFilter<"ProjectItem"> | string | null
    shortDesc?: StringNullableFilter<"ProjectItem"> | string | null
    time?: StringNullableFilter<"ProjectItem"> | string | null
    floor?: IntNullableFilter<"ProjectItem"> | number | null
    link?: StringNullableFilter<"ProjectItem"> | string | null
    placeColor?: StringFilter<"ProjectItem"> | string
    top?: FloatFilter<"ProjectItem"> | number
    left?: FloatFilter<"ProjectItem"> | number
    originX?: StringFilter<"ProjectItem"> | string
    originY?: StringFilter<"ProjectItem"> | string
    width?: FloatNullableFilter<"ProjectItem"> | number | null
    height?: FloatNullableFilter<"ProjectItem"> | number | null
    imageUrl?: StringNullableFilter<"ProjectItem"> | string | null
    radius?: FloatNullableFilter<"ProjectItem"> | number | null
    fill?: StringFilter<"ProjectItem"> | string
    strokeWidth?: FloatFilter<"ProjectItem"> | number
    stroke?: StringNullableFilter<"ProjectItem"> | string | null
    locked?: BoolFilter<"ProjectItem"> | boolean
    type?: EnumProjectItemTypeEnumFilter<"ProjectItem"> | $Enums.ProjectItemTypeEnum
    angle?: FloatFilter<"ProjectItem"> | number
    scaleX?: FloatFilter<"ProjectItem"> | number
    scaleY?: FloatFilter<"ProjectItem"> | number
    projectId?: StringFilter<"ProjectItem"> | string
    createdAt?: DateTimeFilter<"ProjectItem"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectItem"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectItemOrderByWithRelationInput = {
    id?: SortOrder
    canvasId?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    shortDesc?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    floor?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    placeColor?: SortOrder
    top?: SortOrder
    left?: SortOrder
    originX?: SortOrder
    originY?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    radius?: SortOrderInput | SortOrder
    fill?: SortOrder
    strokeWidth?: SortOrder
    stroke?: SortOrderInput | SortOrder
    locked?: SortOrder
    type?: SortOrder
    angle?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectItemWhereInput | ProjectItemWhereInput[]
    OR?: ProjectItemWhereInput[]
    NOT?: ProjectItemWhereInput | ProjectItemWhereInput[]
    canvasId?: StringFilter<"ProjectItem"> | string
    name?: StringFilter<"ProjectItem"> | string
    desc?: StringNullableFilter<"ProjectItem"> | string | null
    shortDesc?: StringNullableFilter<"ProjectItem"> | string | null
    time?: StringNullableFilter<"ProjectItem"> | string | null
    floor?: IntNullableFilter<"ProjectItem"> | number | null
    link?: StringNullableFilter<"ProjectItem"> | string | null
    placeColor?: StringFilter<"ProjectItem"> | string
    top?: FloatFilter<"ProjectItem"> | number
    left?: FloatFilter<"ProjectItem"> | number
    originX?: StringFilter<"ProjectItem"> | string
    originY?: StringFilter<"ProjectItem"> | string
    width?: FloatNullableFilter<"ProjectItem"> | number | null
    height?: FloatNullableFilter<"ProjectItem"> | number | null
    imageUrl?: StringNullableFilter<"ProjectItem"> | string | null
    radius?: FloatNullableFilter<"ProjectItem"> | number | null
    fill?: StringFilter<"ProjectItem"> | string
    strokeWidth?: FloatFilter<"ProjectItem"> | number
    stroke?: StringNullableFilter<"ProjectItem"> | string | null
    locked?: BoolFilter<"ProjectItem"> | boolean
    type?: EnumProjectItemTypeEnumFilter<"ProjectItem"> | $Enums.ProjectItemTypeEnum
    angle?: FloatFilter<"ProjectItem"> | number
    scaleX?: FloatFilter<"ProjectItem"> | number
    scaleY?: FloatFilter<"ProjectItem"> | number
    projectId?: StringFilter<"ProjectItem"> | string
    createdAt?: DateTimeFilter<"ProjectItem"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectItem"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectItemOrderByWithAggregationInput = {
    id?: SortOrder
    canvasId?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    shortDesc?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    floor?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    placeColor?: SortOrder
    top?: SortOrder
    left?: SortOrder
    originX?: SortOrder
    originY?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    radius?: SortOrderInput | SortOrder
    fill?: SortOrder
    strokeWidth?: SortOrder
    stroke?: SortOrderInput | SortOrder
    locked?: SortOrder
    type?: SortOrder
    angle?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectItemCountOrderByAggregateInput
    _avg?: ProjectItemAvgOrderByAggregateInput
    _max?: ProjectItemMaxOrderByAggregateInput
    _min?: ProjectItemMinOrderByAggregateInput
    _sum?: ProjectItemSumOrderByAggregateInput
  }

  export type ProjectItemScalarWhereWithAggregatesInput = {
    AND?: ProjectItemScalarWhereWithAggregatesInput | ProjectItemScalarWhereWithAggregatesInput[]
    OR?: ProjectItemScalarWhereWithAggregatesInput[]
    NOT?: ProjectItemScalarWhereWithAggregatesInput | ProjectItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectItem"> | string
    canvasId?: StringWithAggregatesFilter<"ProjectItem"> | string
    name?: StringWithAggregatesFilter<"ProjectItem"> | string
    desc?: StringNullableWithAggregatesFilter<"ProjectItem"> | string | null
    shortDesc?: StringNullableWithAggregatesFilter<"ProjectItem"> | string | null
    time?: StringNullableWithAggregatesFilter<"ProjectItem"> | string | null
    floor?: IntNullableWithAggregatesFilter<"ProjectItem"> | number | null
    link?: StringNullableWithAggregatesFilter<"ProjectItem"> | string | null
    placeColor?: StringWithAggregatesFilter<"ProjectItem"> | string
    top?: FloatWithAggregatesFilter<"ProjectItem"> | number
    left?: FloatWithAggregatesFilter<"ProjectItem"> | number
    originX?: StringWithAggregatesFilter<"ProjectItem"> | string
    originY?: StringWithAggregatesFilter<"ProjectItem"> | string
    width?: FloatNullableWithAggregatesFilter<"ProjectItem"> | number | null
    height?: FloatNullableWithAggregatesFilter<"ProjectItem"> | number | null
    imageUrl?: StringNullableWithAggregatesFilter<"ProjectItem"> | string | null
    radius?: FloatNullableWithAggregatesFilter<"ProjectItem"> | number | null
    fill?: StringWithAggregatesFilter<"ProjectItem"> | string
    strokeWidth?: FloatWithAggregatesFilter<"ProjectItem"> | number
    stroke?: StringNullableWithAggregatesFilter<"ProjectItem"> | string | null
    locked?: BoolWithAggregatesFilter<"ProjectItem"> | boolean
    type?: EnumProjectItemTypeEnumWithAggregatesFilter<"ProjectItem"> | $Enums.ProjectItemTypeEnum
    angle?: FloatWithAggregatesFilter<"ProjectItem"> | number
    scaleX?: FloatWithAggregatesFilter<"ProjectItem"> | number
    scaleY?: FloatWithAggregatesFilter<"ProjectItem"> | number
    projectId?: StringWithAggregatesFilter<"ProjectItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    VerificationCode?: VerificationCodeCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    VerificationCode?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VerificationCode?: VerificationCodeUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VerificationCode?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateInput = {
    id?: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVerificationCodeInput
  }

  export type VerificationCodeUncheckedCreateInput = {
    id?: string
    code: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type VerificationCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerificationCodeNestedInput
  }

  export type VerificationCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateManyInput = {
    id?: string
    code: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type VerificationCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    imageUrl?: string | null
    canvasWidth?: number
    canvasHeight?: number
    isPublished?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectInput
    items?: ProjectItemCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    imageUrl?: string | null
    canvasWidth?: number
    canvasHeight?: number
    isPublished?: boolean | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ProjectItemUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    canvasWidth?: FloatFieldUpdateOperationsInput | number
    canvasHeight?: FloatFieldUpdateOperationsInput | number
    isPublished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectNestedInput
    items?: ProjectItemUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    canvasWidth?: FloatFieldUpdateOperationsInput | number
    canvasHeight?: FloatFieldUpdateOperationsInput | number
    isPublished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProjectItemUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    imageUrl?: string | null
    canvasWidth?: number
    canvasHeight?: number
    isPublished?: boolean | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    canvasWidth?: FloatFieldUpdateOperationsInput | number
    canvasHeight?: FloatFieldUpdateOperationsInput | number
    isPublished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    canvasWidth?: FloatFieldUpdateOperationsInput | number
    canvasHeight?: FloatFieldUpdateOperationsInput | number
    isPublished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemCreateInput = {
    id?: string
    canvasId: string
    name: string
    desc?: string | null
    shortDesc?: string | null
    time?: string | null
    floor?: number | null
    link?: string | null
    placeColor: string
    top: number
    left: number
    originX: string
    originY: string
    width?: number | null
    height?: number | null
    imageUrl?: string | null
    radius?: number | null
    fill: string
    strokeWidth: number
    stroke?: string | null
    locked?: boolean
    type: $Enums.ProjectItemTypeEnum
    angle: number
    scaleX: number
    scaleY: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutItemsInput
  }

  export type ProjectItemUncheckedCreateInput = {
    id?: string
    canvasId: string
    name: string
    desc?: string | null
    shortDesc?: string | null
    time?: string | null
    floor?: number | null
    link?: string | null
    placeColor: string
    top: number
    left: number
    originX: string
    originY: string
    width?: number | null
    height?: number | null
    imageUrl?: string | null
    radius?: number | null
    fill: string
    strokeWidth: number
    stroke?: string | null
    locked?: boolean
    type: $Enums.ProjectItemTypeEnum
    angle: number
    scaleX: number
    scaleY: number
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    canvasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    placeColor?: StringFieldUpdateOperationsInput | string
    top?: FloatFieldUpdateOperationsInput | number
    left?: FloatFieldUpdateOperationsInput | number
    originX?: StringFieldUpdateOperationsInput | string
    originY?: StringFieldUpdateOperationsInput | string
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    fill?: StringFieldUpdateOperationsInput | string
    strokeWidth?: FloatFieldUpdateOperationsInput | number
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectItemTypeEnumFieldUpdateOperationsInput | $Enums.ProjectItemTypeEnum
    angle?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ProjectItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    canvasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    placeColor?: StringFieldUpdateOperationsInput | string
    top?: FloatFieldUpdateOperationsInput | number
    left?: FloatFieldUpdateOperationsInput | number
    originX?: StringFieldUpdateOperationsInput | string
    originY?: StringFieldUpdateOperationsInput | string
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    fill?: StringFieldUpdateOperationsInput | string
    strokeWidth?: FloatFieldUpdateOperationsInput | number
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectItemTypeEnumFieldUpdateOperationsInput | $Enums.ProjectItemTypeEnum
    angle?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemCreateManyInput = {
    id?: string
    canvasId: string
    name: string
    desc?: string | null
    shortDesc?: string | null
    time?: string | null
    floor?: number | null
    link?: string | null
    placeColor: string
    top: number
    left: number
    originX: string
    originY: string
    width?: number | null
    height?: number | null
    imageUrl?: string | null
    radius?: number | null
    fill: string
    strokeWidth: number
    stroke?: string | null
    locked?: boolean
    type: $Enums.ProjectItemTypeEnum
    angle: number
    scaleX: number
    scaleY: number
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    canvasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    placeColor?: StringFieldUpdateOperationsInput | string
    top?: FloatFieldUpdateOperationsInput | number
    left?: FloatFieldUpdateOperationsInput | number
    originX?: StringFieldUpdateOperationsInput | string
    originY?: StringFieldUpdateOperationsInput | string
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    fill?: StringFieldUpdateOperationsInput | string
    strokeWidth?: FloatFieldUpdateOperationsInput | number
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectItemTypeEnumFieldUpdateOperationsInput | $Enums.ProjectItemTypeEnum
    angle?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    canvasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    placeColor?: StringFieldUpdateOperationsInput | string
    top?: FloatFieldUpdateOperationsInput | number
    left?: FloatFieldUpdateOperationsInput | number
    originX?: StringFieldUpdateOperationsInput | string
    originY?: StringFieldUpdateOperationsInput | string
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    fill?: StringFieldUpdateOperationsInput | string
    strokeWidth?: FloatFieldUpdateOperationsInput | number
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectItemTypeEnumFieldUpdateOperationsInput | $Enums.ProjectItemTypeEnum
    angle?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    projectId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type VerificationCodeListRelationFilter = {
    every?: VerificationCodeWhereInput
    some?: VerificationCodeWhereInput
    none?: VerificationCodeWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type VerificationCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VerificationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ProjectItemListRelationFilter = {
    every?: ProjectItemWhereInput
    some?: ProjectItemWhereInput
    none?: ProjectItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
    isPublished?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
    isPublished?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
    isPublished?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    canvasWidth?: SortOrder
    canvasHeight?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumProjectItemTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectItemTypeEnum | EnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectItemTypeEnum[] | ListEnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectItemTypeEnum[] | ListEnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectItemTypeEnumFilter<$PrismaModel> | $Enums.ProjectItemTypeEnum
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectItemCountOrderByAggregateInput = {
    id?: SortOrder
    canvasId?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    shortDesc?: SortOrder
    time?: SortOrder
    floor?: SortOrder
    link?: SortOrder
    placeColor?: SortOrder
    top?: SortOrder
    left?: SortOrder
    originX?: SortOrder
    originY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    imageUrl?: SortOrder
    radius?: SortOrder
    fill?: SortOrder
    strokeWidth?: SortOrder
    stroke?: SortOrder
    locked?: SortOrder
    type?: SortOrder
    angle?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectItemAvgOrderByAggregateInput = {
    floor?: SortOrder
    top?: SortOrder
    left?: SortOrder
    width?: SortOrder
    height?: SortOrder
    radius?: SortOrder
    strokeWidth?: SortOrder
    angle?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
  }

  export type ProjectItemMaxOrderByAggregateInput = {
    id?: SortOrder
    canvasId?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    shortDesc?: SortOrder
    time?: SortOrder
    floor?: SortOrder
    link?: SortOrder
    placeColor?: SortOrder
    top?: SortOrder
    left?: SortOrder
    originX?: SortOrder
    originY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    imageUrl?: SortOrder
    radius?: SortOrder
    fill?: SortOrder
    strokeWidth?: SortOrder
    stroke?: SortOrder
    locked?: SortOrder
    type?: SortOrder
    angle?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectItemMinOrderByAggregateInput = {
    id?: SortOrder
    canvasId?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    shortDesc?: SortOrder
    time?: SortOrder
    floor?: SortOrder
    link?: SortOrder
    placeColor?: SortOrder
    top?: SortOrder
    left?: SortOrder
    originX?: SortOrder
    originY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    imageUrl?: SortOrder
    radius?: SortOrder
    fill?: SortOrder
    strokeWidth?: SortOrder
    stroke?: SortOrder
    locked?: SortOrder
    type?: SortOrder
    angle?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectItemSumOrderByAggregateInput = {
    floor?: SortOrder
    top?: SortOrder
    left?: SortOrder
    width?: SortOrder
    height?: SortOrder
    radius?: SortOrder
    strokeWidth?: SortOrder
    angle?: SortOrder
    scaleX?: SortOrder
    scaleY?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumProjectItemTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectItemTypeEnum | EnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectItemTypeEnum[] | ListEnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectItemTypeEnum[] | ListEnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectItemTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.ProjectItemTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectItemTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumProjectItemTypeEnumFilter<$PrismaModel>
  }

  export type VerificationCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type VerificationCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VerificationCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodeUpsertWithWhereUniqueWithoutUserInput | VerificationCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    set?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    disconnect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    delete?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    update?: VerificationCodeUpdateWithWhereUniqueWithoutUserInput | VerificationCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodeUpdateManyWithWhereWithoutUserInput | VerificationCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type VerificationCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput> | VerificationCodeCreateWithoutUserInput[] | VerificationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutUserInput | VerificationCodeCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodeUpsertWithWhereUniqueWithoutUserInput | VerificationCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodeCreateManyUserInputEnvelope
    set?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    disconnect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    delete?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    update?: VerificationCodeUpdateWithWhereUniqueWithoutUserInput | VerificationCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodeUpdateManyWithWhereWithoutUserInput | VerificationCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVerificationCodeInput = {
    create?: XOR<UserCreateWithoutVerificationCodeInput, UserUncheckedCreateWithoutVerificationCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationCodeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVerificationCodeNestedInput = {
    create?: XOR<UserCreateWithoutVerificationCodeInput, UserUncheckedCreateWithoutVerificationCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationCodeInput
    upsert?: UserUpsertWithoutVerificationCodeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationCodeInput, UserUpdateWithoutVerificationCodeInput>, UserUncheckedUpdateWithoutVerificationCodeInput>
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectItemCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput> | ProjectItemCreateWithoutProjectInput[] | ProjectItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectItemCreateOrConnectWithoutProjectInput | ProjectItemCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectItemCreateManyProjectInputEnvelope
    connect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
  }

  export type ProjectItemUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput> | ProjectItemCreateWithoutProjectInput[] | ProjectItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectItemCreateOrConnectWithoutProjectInput | ProjectItemCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectItemCreateManyProjectInputEnvelope
    connect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectInput, UserUpdateWithoutProjectInput>, UserUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectItemUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput> | ProjectItemCreateWithoutProjectInput[] | ProjectItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectItemCreateOrConnectWithoutProjectInput | ProjectItemCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectItemUpsertWithWhereUniqueWithoutProjectInput | ProjectItemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectItemCreateManyProjectInputEnvelope
    set?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    disconnect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    delete?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    connect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    update?: ProjectItemUpdateWithWhereUniqueWithoutProjectInput | ProjectItemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectItemUpdateManyWithWhereWithoutProjectInput | ProjectItemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectItemScalarWhereInput | ProjectItemScalarWhereInput[]
  }

  export type ProjectItemUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput> | ProjectItemCreateWithoutProjectInput[] | ProjectItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectItemCreateOrConnectWithoutProjectInput | ProjectItemCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectItemUpsertWithWhereUniqueWithoutProjectInput | ProjectItemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectItemCreateManyProjectInputEnvelope
    set?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    disconnect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    delete?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    connect?: ProjectItemWhereUniqueInput | ProjectItemWhereUniqueInput[]
    update?: ProjectItemUpdateWithWhereUniqueWithoutProjectInput | ProjectItemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectItemUpdateManyWithWhereWithoutProjectInput | ProjectItemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectItemScalarWhereInput | ProjectItemScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutItemsInput
    connect?: ProjectWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProjectItemTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.ProjectItemTypeEnum
  }

  export type ProjectUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutItemsInput
    upsert?: ProjectUpsertWithoutItemsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutItemsInput, ProjectUpdateWithoutItemsInput>, ProjectUncheckedUpdateWithoutItemsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProjectItemTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectItemTypeEnum | EnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectItemTypeEnum[] | ListEnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectItemTypeEnum[] | ListEnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectItemTypeEnumFilter<$PrismaModel> | $Enums.ProjectItemTypeEnum
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumProjectItemTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectItemTypeEnum | EnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectItemTypeEnum[] | ListEnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectItemTypeEnum[] | ListEnumProjectItemTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectItemTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.ProjectItemTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectItemTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumProjectItemTypeEnumFilter<$PrismaModel>
  }

  export type VerificationCodeCreateWithoutUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationCodeUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationCodeCreateOrConnectWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    create: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodeCreateManyUserInputEnvelope = {
    data: VerificationCodeCreateManyUserInput | VerificationCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    imageUrl?: string | null
    canvasWidth?: number
    canvasHeight?: number
    isPublished?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ProjectItemCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    imageUrl?: string | null
    canvasWidth?: number
    canvasHeight?: number
    isPublished?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ProjectItemUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VerificationCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    update: XOR<VerificationCodeUpdateWithoutUserInput, VerificationCodeUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationCodeCreateWithoutUserInput, VerificationCodeUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationCodeWhereUniqueInput
    data: XOR<VerificationCodeUpdateWithoutUserInput, VerificationCodeUncheckedUpdateWithoutUserInput>
  }

  export type VerificationCodeUpdateManyWithWhereWithoutUserInput = {
    where: VerificationCodeScalarWhereInput
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationCodeScalarWhereInput = {
    AND?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
    OR?: VerificationCodeScalarWhereInput[]
    NOT?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
    id?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    userId?: StringFilter<"VerificationCode"> | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    imageUrl?: StringNullableFilter<"Project"> | string | null
    canvasWidth?: FloatFilter<"Project"> | number
    canvasHeight?: FloatFilter<"Project"> | number
    isPublished?: BoolNullableFilter<"Project"> | boolean | null
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutVerificationCodeInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationCodeInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationCodeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationCodeInput, UserUncheckedCreateWithoutVerificationCodeInput>
  }

  export type UserUpsertWithoutVerificationCodeInput = {
    update: XOR<UserUpdateWithoutVerificationCodeInput, UserUncheckedUpdateWithoutVerificationCodeInput>
    create: XOR<UserCreateWithoutVerificationCodeInput, UserUncheckedCreateWithoutVerificationCodeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationCodeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationCodeInput, UserUncheckedUpdateWithoutVerificationCodeInput>
  }

  export type UserUpdateWithoutVerificationCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProjectInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    VerificationCode?: VerificationCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    email: string
    password: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    VerificationCode?: VerificationCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type ProjectItemCreateWithoutProjectInput = {
    id?: string
    canvasId: string
    name: string
    desc?: string | null
    shortDesc?: string | null
    time?: string | null
    floor?: number | null
    link?: string | null
    placeColor: string
    top: number
    left: number
    originX: string
    originY: string
    width?: number | null
    height?: number | null
    imageUrl?: string | null
    radius?: number | null
    fill: string
    strokeWidth: number
    stroke?: string | null
    locked?: boolean
    type: $Enums.ProjectItemTypeEnum
    angle: number
    scaleX: number
    scaleY: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectItemUncheckedCreateWithoutProjectInput = {
    id?: string
    canvasId: string
    name: string
    desc?: string | null
    shortDesc?: string | null
    time?: string | null
    floor?: number | null
    link?: string | null
    placeColor: string
    top: number
    left: number
    originX: string
    originY: string
    width?: number | null
    height?: number | null
    imageUrl?: string | null
    radius?: number | null
    fill: string
    strokeWidth: number
    stroke?: string | null
    locked?: boolean
    type: $Enums.ProjectItemTypeEnum
    angle: number
    scaleX: number
    scaleY: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectItemCreateOrConnectWithoutProjectInput = {
    where: ProjectItemWhereUniqueInput
    create: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput>
  }

  export type ProjectItemCreateManyProjectInputEnvelope = {
    data: ProjectItemCreateManyProjectInput | ProjectItemCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VerificationCode?: VerificationCodeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VerificationCode?: VerificationCodeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectItemUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectItemWhereUniqueInput
    update: XOR<ProjectItemUpdateWithoutProjectInput, ProjectItemUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectItemCreateWithoutProjectInput, ProjectItemUncheckedCreateWithoutProjectInput>
  }

  export type ProjectItemUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectItemWhereUniqueInput
    data: XOR<ProjectItemUpdateWithoutProjectInput, ProjectItemUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectItemUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectItemScalarWhereInput
    data: XOR<ProjectItemUpdateManyMutationInput, ProjectItemUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectItemScalarWhereInput = {
    AND?: ProjectItemScalarWhereInput | ProjectItemScalarWhereInput[]
    OR?: ProjectItemScalarWhereInput[]
    NOT?: ProjectItemScalarWhereInput | ProjectItemScalarWhereInput[]
    id?: StringFilter<"ProjectItem"> | string
    canvasId?: StringFilter<"ProjectItem"> | string
    name?: StringFilter<"ProjectItem"> | string
    desc?: StringNullableFilter<"ProjectItem"> | string | null
    shortDesc?: StringNullableFilter<"ProjectItem"> | string | null
    time?: StringNullableFilter<"ProjectItem"> | string | null
    floor?: IntNullableFilter<"ProjectItem"> | number | null
    link?: StringNullableFilter<"ProjectItem"> | string | null
    placeColor?: StringFilter<"ProjectItem"> | string
    top?: FloatFilter<"ProjectItem"> | number
    left?: FloatFilter<"ProjectItem"> | number
    originX?: StringFilter<"ProjectItem"> | string
    originY?: StringFilter<"ProjectItem"> | string
    width?: FloatNullableFilter<"ProjectItem"> | number | null
    height?: FloatNullableFilter<"ProjectItem"> | number | null
    imageUrl?: StringNullableFilter<"ProjectItem"> | string | null
    radius?: FloatNullableFilter<"ProjectItem"> | number | null
    fill?: StringFilter<"ProjectItem"> | string
    strokeWidth?: FloatFilter<"ProjectItem"> | number
    stroke?: StringNullableFilter<"ProjectItem"> | string | null
    locked?: BoolFilter<"ProjectItem"> | boolean
    type?: EnumProjectItemTypeEnumFilter<"ProjectItem"> | $Enums.ProjectItemTypeEnum
    angle?: FloatFilter<"ProjectItem"> | number
    scaleX?: FloatFilter<"ProjectItem"> | number
    scaleY?: FloatFilter<"ProjectItem"> | number
    projectId?: StringFilter<"ProjectItem"> | string
    createdAt?: DateTimeFilter<"ProjectItem"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectItem"> | Date | string
  }

  export type ProjectCreateWithoutItemsInput = {
    id?: string
    name: string
    imageUrl?: string | null
    canvasWidth?: number
    canvasHeight?: number
    isPublished?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    imageUrl?: string | null
    canvasWidth?: number
    canvasHeight?: number
    isPublished?: boolean | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutItemsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
  }

  export type ProjectUpsertWithoutItemsInput = {
    update: XOR<ProjectUpdateWithoutItemsInput, ProjectUncheckedUpdateWithoutItemsInput>
    create: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutItemsInput, ProjectUncheckedUpdateWithoutItemsInput>
  }

  export type ProjectUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    canvasWidth?: FloatFieldUpdateOperationsInput | number
    canvasHeight?: FloatFieldUpdateOperationsInput | number
    isPublished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    canvasWidth?: FloatFieldUpdateOperationsInput | number
    canvasHeight?: FloatFieldUpdateOperationsInput | number
    isPublished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateManyUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    imageUrl?: string | null
    canvasWidth?: number
    canvasHeight?: number
    isPublished?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    canvasWidth?: FloatFieldUpdateOperationsInput | number
    canvasHeight?: FloatFieldUpdateOperationsInput | number
    isPublished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProjectItemUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    canvasWidth?: FloatFieldUpdateOperationsInput | number
    canvasHeight?: FloatFieldUpdateOperationsInput | number
    isPublished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ProjectItemUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    canvasWidth?: FloatFieldUpdateOperationsInput | number
    canvasHeight?: FloatFieldUpdateOperationsInput | number
    isPublished?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemCreateManyProjectInput = {
    id?: string
    canvasId: string
    name: string
    desc?: string | null
    shortDesc?: string | null
    time?: string | null
    floor?: number | null
    link?: string | null
    placeColor: string
    top: number
    left: number
    originX: string
    originY: string
    width?: number | null
    height?: number | null
    imageUrl?: string | null
    radius?: number | null
    fill: string
    strokeWidth: number
    stroke?: string | null
    locked?: boolean
    type: $Enums.ProjectItemTypeEnum
    angle: number
    scaleX: number
    scaleY: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectItemUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    canvasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    placeColor?: StringFieldUpdateOperationsInput | string
    top?: FloatFieldUpdateOperationsInput | number
    left?: FloatFieldUpdateOperationsInput | number
    originX?: StringFieldUpdateOperationsInput | string
    originY?: StringFieldUpdateOperationsInput | string
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    fill?: StringFieldUpdateOperationsInput | string
    strokeWidth?: FloatFieldUpdateOperationsInput | number
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectItemTypeEnumFieldUpdateOperationsInput | $Enums.ProjectItemTypeEnum
    angle?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    canvasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    placeColor?: StringFieldUpdateOperationsInput | string
    top?: FloatFieldUpdateOperationsInput | number
    left?: FloatFieldUpdateOperationsInput | number
    originX?: StringFieldUpdateOperationsInput | string
    originY?: StringFieldUpdateOperationsInput | string
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    fill?: StringFieldUpdateOperationsInput | string
    strokeWidth?: FloatFieldUpdateOperationsInput | number
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectItemTypeEnumFieldUpdateOperationsInput | $Enums.ProjectItemTypeEnum
    angle?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectItemUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    canvasId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    shortDesc?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    placeColor?: StringFieldUpdateOperationsInput | string
    top?: FloatFieldUpdateOperationsInput | number
    left?: FloatFieldUpdateOperationsInput | number
    originX?: StringFieldUpdateOperationsInput | string
    originY?: StringFieldUpdateOperationsInput | string
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    radius?: NullableFloatFieldUpdateOperationsInput | number | null
    fill?: StringFieldUpdateOperationsInput | string
    strokeWidth?: FloatFieldUpdateOperationsInput | number
    stroke?: NullableStringFieldUpdateOperationsInput | string | null
    locked?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumProjectItemTypeEnumFieldUpdateOperationsInput | $Enums.ProjectItemTypeEnum
    angle?: FloatFieldUpdateOperationsInput | number
    scaleX?: FloatFieldUpdateOperationsInput | number
    scaleY?: FloatFieldUpdateOperationsInput | number
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