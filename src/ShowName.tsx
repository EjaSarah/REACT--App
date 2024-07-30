import ShowMyFriendName from "./ShowMyFriendName";

const ShowName  = (props) => {
    console.log("props", props);
    return (
        <>
            <div>My name is {props.myName}</div>
            <div>my friend name is {props.myFriendName}</div>
            <ShowMyFriendName />
        </>
    )

}

export default  ShowName;