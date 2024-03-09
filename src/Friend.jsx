export default function Friend({friend}){
  const {name , email} = friend;
    return (
      // ekhane je bisoy ta hocche seta holo similar in look different in data.
        <div className="box">
            <h4>Name :  {name}</h4>
            <p>Email :  {email}</p>
        </div>
    )
}