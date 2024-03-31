export interface RootObject {
    formTitle: string;
    saveBtnTitle: string;
    resetBtnTitle: string;
    formControls: IFormControl[];
}

export interface IFormControl {
    name: string;
    label: string;
    value?: string;
    placeholder: string;
    class: string;
    type: string;
    validators: IValidator[];
    radioOptions?: string[];
    options?: IOption[];
}

export interface IOption {
    id: number;
    value: string;
}

export interface IValidator {
    validatorName: string;
    required?: boolean;
    message: string;
    minLength?: number;
    email?: string;
    maxLength?: number;
}