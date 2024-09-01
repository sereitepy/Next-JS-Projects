import {PostgreSQL} from '@/db/db'

export default async function SignIn() {
  const infos = await PostgreSQL.info.findMany()

  return(
    <main>
      <h1>Directory</h1>
      <form></form>

      <ul>
        (infos.map((info) => (
          <li></li>
        )))
      </ul>
    </main>
  )
}

