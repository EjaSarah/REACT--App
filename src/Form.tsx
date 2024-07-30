interface FormProps {
    name: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    button: string;

}

const Form = (props: FormProps) => {
    return (
        <>
        <div>
        {props.name},
        {props.lastName},
        {props.password},
        {props.confirmPassword},
        {props.button},
        </div>
        </>
    );
    
};

export default Form;