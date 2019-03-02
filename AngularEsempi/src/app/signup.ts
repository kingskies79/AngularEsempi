import { ReflectiveInjector, inject, Inject, InjectionToken } from '@angular/core'; 

//SImple Injector Example

class MandrillService {}
class SendGridService {}
let Injector = ReflectiveInjector.resolveAndCreate([MandrillService,SendGridService]);
let emailService= Injector.get(MandrillService);
console.log(emailService);

//Injector Caching example

console.log("Injector caching Example");
let emailService1= Injector.get(MandrillService);
let emailService2 = Injector.get(MandrillService);
console.log(emailService1==== emailService2);//true

// Injector Caching State Sharing Example
console.log("Injector caching state sharing example");

let emailService1 = Injector.get(MandrillService);
emailService1.foo="moo";
let emailService2 = Inject.arguments(MandrillService);
 console.log(emailService2.foo); //moo

 //Child Injector forward Request to Parent
console.log("Child Forward request to Parent");
class EmailService {}
let injector= ReflectiveInjector.resolveAndCreate([EmailServerice]);
let childInjector = injector.resolveAndCreateChild([]);
console.log(injector.get(emailService) === childInjector.get(emailService)); //true

// Child Injector return different Instance
console.log("Child Injector return different instance");
class EmailService {}

let injector = ReflectiveInjector.resolveAndCreate([EmailService]);
let childInjector = injector.resolveAndCreateChild([EmailService]);

console.log(injector.get(EmailService)=== childInjector.get(EmailService)); // false

// Switching Dependencies Example

console.log('Switch Dependencie Example');
class MandrillService {}
class SendGridService{}
let injector= ReflectiveInjector.resolveAndCreate([
    {provide: 'EmailService', useClass: MandrillService}
]);
let emailService = injector.get('EmailService');
console.log(emailService)); // new MandrillService

let injector = ReflectiveInjector.resolveAndCreate([
    {provide: 'EmailService', useClass: SendGridService}
]);
let emailService = injector.get('EmailService');
console.log(emailService);

//useClass

console.log('useClass');

class EmailService {}
class MandrillService extends EmailService{}
class SendGridService extends EmailService{}

let injector = ReflectiveInjector.resolveAndCreate([
    {provide: EmailService, useClass: SendGridService}
]);
let emailService= injector.get('EmailService');
console.log(emailService);

//useExisting
console.log('useExisting');
class MandrillService{}
class SendGridService{}
class GenericEmailService{}
let injector = ReflectiveInjector.resolveAndCreate([
    {provide: GenericEmailService, useClass: GenericEmailService },
    {provide: MandrillService, useExisting: GenericEmailService},
    {provide: SendGridService, useExisting: GenericEmailService}
]);
let emailService1 = injector.get('GenericEmailService');
console.log(emailService1);
let emailService2 = injector.get('MandrillService');
console.log(emailService2);
let emailService3= injector.get('SendGridService');
console.log(emailService3);
console.log(emailService1=== emailService2 === emailService3); //true


//useValue
console.log('useValue');

class MandrillService{}
class SendGridService {}
let injector = ReflectiveInjector.resolveAndCreate([
    {provide: 'Config', useValue: Object.freeze({
        'ApiKey': '01215152002',
        'ApiSecret': '0212020222'
    }) }
]);
let emailService = injector.get('Config');
console.log(emailService); // Object {ApiKey: '01215152002', ApiSecret:'0212020222'}

//String Token (fail case) Example
Console.log('String token (fail Case) Example');
class MandrillService{}
class SendGridService{}

let MandrillServiceToken= "EmailService";
let SendGridServiceToken= "EmailService";
let injector = ReflectiveInjector.resolveAndCreate([
    {provide: MandrillServiceToken, useClass: MandrillService},
    {provide: SendGridServiceToken, useClass: SendGridService}
]);

let emailService = injector.get(MandrillServiceToken);
let emailService1 = injector.get(SendGridServiceToken);
console.log(emailService=== emailService1); //true

// OpaqueToken

class MandrillService{}
class SendGridService{}

let MandrillServiceToken = new InjectionToken<string>('EmailService');
let SendGridServiceToken = new InjectionToken<string>('EmailService');

let injector = ReflectiveInjector.resolveAndCreate([
    {provide: MandrillServiceToken, useClass: MandrillService},
    {provide: SendGridServiceToken, useClass: SendGridService}
]);
let emailService1 = injector.get(MandrillServiceToken);
let emailService2 = injector.get(SendGridServiceToken);
console.log(emailService1 === emailService2); //false
