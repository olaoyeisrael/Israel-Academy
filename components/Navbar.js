import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
    <h1 style={{textAlign: "center"}}>Israel Academy</h1>
    <nav>
      <div className="logo">
        <Image src="/israelAcademy.png" alt="site logo" width={128} height={77} />
      </div>
      <div>
      
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/israel/"><a>List of Students</a></Link>
    </nav>
    </div>
  );
}
 
export default Navbar;