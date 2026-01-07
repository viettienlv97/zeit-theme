/**
 * TypeScript Comprehensive Example File
 * This file demonstrates various TypeScript features and patterns
 */

// ============================================================================
// BASIC TYPES
// ============================================================================

// Primitive types
const stringType: string = 'Hello, TypeScript!'
const numberType: number = 42
const booleanType: boolean = true
const nullType: null = null
const undefinedType: undefined = undefined
const symbolType: symbol = Symbol('unique')
const bigIntType: bigint = 9007199254740991n

// Any and Unknown
let anyType: any = 'can be anything'
anyType = 42
anyType = true

let unknownType: unknown = 'safer than any'
if (typeof unknownType === 'string') {
  console.log(unknownType.toUpperCase())
}

// Void and Never
function noReturn(): void {
  console.log('This function returns nothing')
}

function neverReturns(): never {
  throw new Error('This function never returns')
}

// ============================================================================
// ARRAYS AND TUPLES
// ============================================================================

// Array types
const numberArray: number[] = [1, 2, 3, 4, 5]
const stringArray: Array<string> = ['a', 'b', 'c']
const mixedArray: (string | number)[] = [1, 'two', 3, 'four']

// Readonly arrays
const readonlyArray: ReadonlyArray<number> = [1, 2, 3]
const readonlyArray2: readonly string[] = ['a', 'b', 'c']

// Tuples
const tuple: [string, number] = ['Alice', 30]
const tupleWithOptional: [string, number?] = ['Bob']
const tupleWithRest: [string, ...number[]] = ['Numbers', 1, 2, 3, 4]

// Named tuples
type Point = [x: number, y: number, z?: number]
const point: Point = [10, 20]

// ============================================================================
// OBJECTS AND INTERFACES
// ============================================================================

// Object type
const obj: { name: string; age: number } = {
  name: 'John',
  age: 25
}

// Interface
interface User {
  id: number
  name: string
  email: string
  age?: number // Optional property
  readonly createdAt: Date // Readonly property
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  createdAt: new Date()
}

// Interface with index signature
interface Dictionary {
  [key: string]: string | number
}

const dict: Dictionary = {
  name: 'John',
  age: 30,
  city: 'New York'
}

// Interface extending
interface Employee extends User {
  department: string
  salary: number
}

const employee: Employee = {
  id: 2,
  name: 'Bob',
  email: 'bob@example.com',
  createdAt: new Date(),
  department: 'Engineering',
  salary: 75000
}

// Interface with methods
interface Calculator {
  add(a: number, b: number): number
  subtract(a: number, b: number): number
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
}

// ============================================================================
// TYPE ALIASES
// ============================================================================

// Basic type alias
type ID = string | number

// Object type alias
type Product = {
  id: ID
  name: string
  price: number
  description?: string
}

// Union types
type Status = 'pending' | 'approved' | 'rejected'
type Result = string | number | boolean

// Intersection types
type Timestamp = {
  createdAt: Date
  updatedAt: Date
}

type Article = Product &
  Timestamp & {
    author: string
    content: string
  }

// Function types
type MathOperation = (a: number, b: number) => number
type VoidFunction = () => void
type AsyncFunction = () => Promise<void>

const add: MathOperation = (a, b) => a + b
const multiply: MathOperation = (a, b) => a * b

// ============================================================================
// ENUMS
// ============================================================================

// Numeric enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}

const move: Direction = Direction.Up

// String enum
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}

const favoriteColor: Color = Color.Blue

// Const enum (more performant)
const enum LogLevel {
  Debug,
  Info,
  Warning,
  Error
}

const currentLogLevel: LogLevel = LogLevel.Info

// ============================================================================
// FUNCTIONS
// ============================================================================

// Function declaration with types
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, you are ${age} years old` : `Hello ${name}`
}

// Arrow function with types
const square = (n: number): number => n * n

// Function with default parameters
function createUser(name: string, role: string = 'user'): User {
  return {
    id: Math.random(),
    name,
    email: `${name.toLowerCase()}@example.com`,
    createdAt: new Date()
  }
}

// Function with rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0)
}

// Function overloading
function combine(a: string, b: string): string
function combine(a: number, b: number): number
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  throw new Error('Invalid arguments')
}

// Generic function
function identity<T>(arg: T): T {
  return arg
}

const stringIdentity = identity<string>('hello')
const numberIdentity = identity(42) // Type inference

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// Async function
async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

// ============================================================================
// CLASSES
// ============================================================================

// Basic class
class Person {
  // Properties
  private id: number
  public name: string
  protected age: number
  readonly birthDate: Date

  // Static property
  static species: string = 'Homo sapiens'

  // Constructor
  constructor(name: string, age: number, birthDate: Date) {
    this.id = Math.random()
    this.name = name
    this.age = age
    this.birthDate = birthDate
  }

  // Method
  greet(): string {
    return `Hello, my name is ${this.name}`
  }

  // Getter
  get userId(): number {
    return this.id
  }

  // Setter
  set userAge(age: number) {
    if (age > 0) {
      this.age = age
    }
  }

  // Static method
  static createPerson(name: string): Person {
    return new Person(name, 0, new Date())
  }
}

// Class inheritance
class Developer extends Person {
  private skills: string[]

  constructor(name: string, age: number, birthDate: Date, skills: string[]) {
    super(name, age, birthDate)
    this.skills = skills
  }

  // Method override
  greet(): string {
    return `${super.greet()}, I'm a developer`
  }

  addSkill(skill: string): void {
    this.skills.push(skill)
  }

  getSkills(): string[] {
    return [...this.skills]
  }
}

// Abstract class
abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): string

  move(): string {
    return `${this.name} is moving`
  }
}

class Dog extends Animal {
  makeSound(): string {
    return 'Woof! Woof!'
  }
}

// Class implementing interface
interface Printable {
  print(): void
}

class Document implements Printable {
  constructor(private content: string) {}

  print(): void {
    console.log(this.content)
  }
}

// ============================================================================
// GENERICS
// ============================================================================

// Generic class
class Box<T> {
  private value: T

  constructor(value: T) {
    this.value = value
  }

  getValue(): T {
    return this.value
  }

  setValue(value: T): void {
    this.value = value
  }
}

const stringBox = new Box<string>('Hello')
const numberBox = new Box<number>(42)

// Generic interface
interface Repository<T> {
  findById(id: number): T | undefined
  findAll(): T[]
  save(item: T): void
  delete(id: number): void
}

class UserRepository implements Repository<User> {
  private users: User[] = []

  findById(id: number): User | undefined {
    return this.users.find((u) => u.id === id)
  }

  findAll(): User[] {
    return [...this.users]
  }

  save(user: User): void {
    this.users.push(user)
  }

  delete(id: number): void {
    this.users = this.users.filter((u) => u.id !== id)
  }
}

// Generic constraints
interface HasLength {
  length: number
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(`Length: ${arg.length}`)
}

// Multiple generic parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 }
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

// Partial - makes all properties optional
type PartialUser = Partial<User>

// Required - makes all properties required
type RequiredUser = Required<User>

// Readonly - makes all properties readonly
type ReadonlyUser = Readonly<User>

// Pick - picks specific properties
type UserPreview = Pick<User, 'id' | 'name'>

// Omit - omits specific properties
type UserWithoutEmail = Omit<User, 'email'>

// Record - creates an object type with specific keys and value type
type UserRoles = Record<string, string[]>
const roles: UserRoles = {
  admin: ['read', 'write', 'delete'],
  user: ['read']
}

// ReturnType - extracts return type of function
type GreetReturn = ReturnType<typeof greet>

// Parameters - extracts parameter types of function
type GreetParams = Parameters<typeof greet>

// Exclude - excludes types from union
type ExcludedStatus = Exclude<Status, 'pending'>

// Extract - extracts types from union
type ExtractedStatus = Extract<Status, 'approved' | 'rejected'>

// NonNullable - removes null and undefined
type NonNullableString = NonNullable<string | null | undefined>

// ============================================================================
// ADVANCED TYPES
// ============================================================================

// Conditional types
type IsString<T> = T extends string ? true : false
type CheckString = IsString<string> // true
type CheckNumber = IsString<number> // false

// Mapped types
type Nullable<T> = {
  [P in keyof T]: T[P] | null
}

type NullableUser = Nullable<User>

// Template literal types
type EventName = 'click' | 'focus' | 'blur'
type EventHandler = `on${Capitalize<EventName>}`

// Indexed access types
type UserName = User['name']
type UserKeys = keyof User

// Type guards
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function isUser(obj: any): obj is User {
  return obj && typeof obj.id === 'number' && typeof obj.name === 'string'
}

// Discriminated unions
interface Square {
  kind: 'square'
  size: number
}

interface Circle {
  kind: 'circle'
  radius: number
}

interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}

type Shape = Square | Circle | Rectangle

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'square':
      return shape.size ** 2
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'rectangle':
      return shape.width * shape.height
  }
}

// ============================================================================
// DECORATORS (requires experimentalDecorators: true)
// ============================================================================

// Class decorator
function sealed(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args:`, args)
    const result = originalMethod.apply(this, args)
    console.log(`Result:`, result)
    return result
  }
  return descriptor
}

// Property decorator
function readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false
  })
}

// @sealed
class ExampleClass {
  @readonly
  name: string = 'Example'

  @log
  greet(message: string): string {
    return `Hello, ${message}`
  }
}

// ============================================================================
// MODULES AND NAMESPACES
// ============================================================================

// Module exports
export { User, Employee, Calculator }
export type { ID, Status, Result }
export default class DefaultExport {}

// Namespace
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean
  }

  export class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
    }
  }

  export class URLValidator implements StringValidator {
    isValid(s: string): boolean {
      try {
        new URL(s)
        return true
      } catch {
        return false
      }
    }
  }
}

// ============================================================================
// ERROR HANDLING
// ============================================================================

class CustomError extends Error {
  constructor(public code: string, message: string) {
    super(message)
    this.name = 'CustomError'
  }
}

function processData(data: unknown): string {
  try {
    if (!data) {
      throw new CustomError('NO_DATA', 'Data is required')
    }
    if (typeof data !== 'string') {
      throw new TypeError('Data must be a string')
    }
    return data.toUpperCase()
  } catch (error) {
    if (error instanceof CustomError) {
      console.error(`Custom error [${error.code}]:`, error.message)
    } else if (error instanceof TypeError) {
      console.error('Type error:', error.message)
    } else {
      console.error('Unknown error:', error)
    }
    throw error
  }
}

// ============================================================================
// PROMISES AND ASYNC/AWAIT
// ============================================================================

// Promise type
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success'), 1000)
})

// Async/await with error handling
async function asyncOperation(): Promise<void> {
  try {
    const result = await fetchData('https://api.example.com/data')
    console.log(result)
  } catch (error) {
    console.error('Error:', error)
  }
}

// Promise.all with types
async function parallelOperations(): Promise<[string, number, boolean]> {
  return Promise.all([
    Promise.resolve('string'),
    Promise.resolve(42),
    Promise.resolve(true)
  ])
}

// ============================================================================
// TYPE ASSERTIONS AND CASTING
// ============================================================================

// Type assertion with 'as'
const someValue: unknown = 'this is a string'
const strLength: number = (someValue as string).length

// Type assertion with angle brackets
const anotherValue: unknown = 'another string'
const anotherLength: number = (<string>anotherValue).length

// Non-null assertion
function processUser(user: User | null): string {
  return user!.name // Assert that user is not null
}

// Const assertion
const colors = ['red', 'green', 'blue'] as const
type Colors = (typeof colors)[number] // "red" | "green" | "blue"

// ============================================================================
// EXAMPLE USAGE
// ============================================================================

console.log('TypeScript example file loaded successfully!')

const exampleUser = createUser('Alice', 'admin')
const dev = new Developer('Bob', 30, new Date(), ['TypeScript', 'React'])
dev.addSkill('Node.js')

const emailValidator = new Validation.EmailValidator()
console.log(emailValidator.isValid('test@example.com'))

export {}
