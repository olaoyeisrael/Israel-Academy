import styles from '../../styles/Israel.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { students: data }
  }
}

const Students = ({ students }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Students</h1>
      {students.map(student => (
        <Link href={'/israel/' + student.id} key={student.id}>
          <a className={styles.single}>
            <h3>{ student.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Students;