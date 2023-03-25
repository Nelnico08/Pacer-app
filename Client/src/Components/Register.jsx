
export default function Register() {
  return (
    <form className="w-screen min-h-screen bg-gradient-to-b from-amber-200 via-amber-100 to-zinc-400">
      <div className="w-full flex flex-col items-center text-orange-900 shadow-md shadow-amber-900">
        <h3>Sign in</h3>

        <div className="grid grid-cols-2 m-2">
          <label>Firstname:</label>
          <input />
        </div>

        <div className="grid grid-cols-2 m-2">
          <label>Lastname:</label>
          <input />
        </div>

        <div className="grid grid-cols-2 m-2">
          <label>Username:</label>
          <input />
        </div>

        <div className="grid grid-cols-2 m-2">
        <label>Email:</label>
        <input />
        </div>

        <div className="grid grid-cols-2 m-2">
        <label>Password:</label>
        <input />
        </div>

        <div className="grid grid-cols-2 m-2">
        <label>Confirm password:</label>
        <input />
        </div>

        <div>
          <input type="submit" value="submit" className="btn" />
          <input type="button" value="Home" className="btn" />
        </div>

      </div>
    </form>
  )
}
