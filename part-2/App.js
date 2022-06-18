function App(){
    return(
        <div>
            <Tweet
            username="Taioh"
            name="Lucky"
            date={new Date().toDateString()}
            message="Hello Hello Hello"
            />
        </div>
    );
}
