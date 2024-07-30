interface GreetProps {
    name: string;
    time: number;
    children: React.ReactNode;
}


const Greet = (props: GreetProps) => {
    return (
        <>
        <div> Hello Good evening {props.name}, the time is {props.time}</div>
        {props.children}
        </>
    );
};

export default Greet;