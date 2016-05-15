import {Component}         from 'angular2/core';
import { DataService } from '../../shared/services/data.service';
import {
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Validators,
    AbstractControl,
    Control,
    NgClass
} from 'angular2/common';
// import {HeroFormComponent} from './hero-form.component'


@Component({
    selector: 'app-container',
    templateUrl: './app/test/edit/edit.test.component.html',
    providers: [DataService],
    directives: [FORM_DIRECTIVES]
    // directives: [HeroFormComponent]
})
export class EditComponent {

    public genders: String[] = ['Male', 'Female'];
    //private dataService: DataService;
    private customers: any[] = [];
    private active: boolean = true;
    private loginForm: ControlGroup;
    isvalid : boolean;
    name : Control = new Control('',Validators.required);
    email : Control = new Control('', Validators.required);
    password: Control = new Control('', Validators.required);
    confirmPassword : Control =  new Control('',Validators.required);




    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            name: this.name,
            email: this.email,
            matchingPassword: fb.group({
                password: this.password,
                confirmPassword: this.confirmPassword
            }, { validator: this.areEqual })
        });
    }

    ngOnInit(){
      // this.loginForm = new ControlGroup({
      //   name: new Control('',Validators.required),
      //   email: new Control('',Validators.required),
      //   matchingPassword: new ControlGroup({
      //     password: new Control('', Validators.required),
      //     confirmPassword : new Control('',Validators.required)
      //   })
      //
      // })
      //
      this.name.updateValue('jack');
      //

    }


    areEqual(group: ControlGroup) {

        let val:any;
        let valid = true;

        for (name in group.controls) {
            if (val === undefined) {
                val = group.controls[name].value
            } else {
                if (val !== group.controls[name].value) {
                    valid = false;
                    break;
                }
            }
        }

        if (valid) {
            return null;
        }

        return {
            areEqual: true
        };
    }
    // private fillData() {
    //     this.firstName.value = this.customers.firstName;
    // }
    // private getData() {
    //     this.dataService.getCustomerbyID(11)
    //         .subscribe((customers: any[]) => {
    //             this.customers = customers;
    //             this.fillData();
    //         });
    //
    // }

    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }

    private matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: ControlGroup): { [key: string]: any } => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }

}
