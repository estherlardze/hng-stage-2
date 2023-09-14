import { Navbar, DescriptionBox, MovieList, Footer} from ".";

export default function Home(){
    return(
        <div>
        <header className="header">
          <Navbar />
          <DescriptionBox />
        </header>
        <main className="mt-[15%]">
          <MovieList />
        </main>
         <Footer /> 
      </div>
    )
}