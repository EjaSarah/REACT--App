import ShowInstructorName from "./ShowInstructorName";

const ShowMyFriendName = (props) => {
    console.log("props", props);
    return (
        <>
             <div>My best friend is Sammy</div>
             <ShowInstructorName />
        </>
        
    )

}

export default ShowMyFriendName;