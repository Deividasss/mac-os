

const HomeScreen =({logout, user})=>{
    return(
        <div>
            <h1>Sveiki {user}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default HomeScreen