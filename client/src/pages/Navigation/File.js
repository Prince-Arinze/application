<React.Fragment>
<div className="navbar">
    <ul className="navbar-lists">
        <li className="navbar-brand" style={{order: 1, flex: "1 1 37%", alignSelf: "center"}}><NavLink to="/"><img src={DIA} style={{height: "100px", width: "100px"}} alt="logo"/></NavLink></li>
        <li className="nav-item1" style={{order: 2, flex: "1 1 450px", alignSelf: "center"}}><NavLink to="/archives">Military Archives</NavLink></li>
        <li className="nav-item2" style={{order: 3, flex: "1 1 100px", alignSelf: "center"}}><NavLink to="/" onClick={startCreateBooking}>Login</NavLink> | <NavLink to="/glosary">Glossary</NavLink></li>
    </ul>
</div>
{
    value &&  <Modal title={"Login as a Super Admin and change your password"} canCancel={modalCancelHandler} canConfirm={modalConfirmHandler}>
    <form >
    <div className="form-control">
        <label htmlFor="username">username:</label>
        <input type="text" id="username" className="name_input" ref={usernameRef}/>
    </div>
    <div className="form-control">
         <label htmlFor="password">password:</label>
         <input type="password" id="password" className="email_input" ref={passwordRef}/>
    </div>
    </form>

</Modal>
}
</React.Fragment>