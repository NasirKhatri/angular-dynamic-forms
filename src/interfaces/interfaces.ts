export interface RootObject {
    formTitle: string;
    saveBtnTitle: string;
    resetBtnTitle: string;
    formControls: FormControl[];
}

export interface FormControl {
    name: string;
    label: string;
    value?: string;
    placeholder: string;
    class: string;
    type: string;
    validators: Validator[];
    radioOptions?: string[];
    options?: Option[];
}

export interface Option {
    id: number;
    value: string;
}

export interface Validator {
    validatorName: string;
    required?: boolean;
    message: string;
    minLength?: number;
    email?: string;
    maxLength?: number;
}