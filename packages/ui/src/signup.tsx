
export function Signup (){
  return (
    <div style={{width:"100vh", display:'flex', justifyContent:'center',alignItems:'center'}}>
        <div className='' style={{width:"400px",border:"1px solid black"}}>
        <input type="text" placeholder='email' />
        <input type="text" placeholder='password' />
        <button>Submit</button>
    </div>
    </div>
  )
}
