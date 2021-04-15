import react from 'react';
export default function Form(){

return (
    <div>
       <h1>Registration</h1>
       <form action="insert.php" method="POST">
           <label>Name</label>
           <input type="text" name="name"/><br></br>
           <label>Email</label>
           <input type="email" name="email"/><br></br>
           <label>Email</label>
           <input type="'text" name="address"/><br></br>
           <button type="submit" name="submit">Submit</button>
       </form>
    </div>
);

}