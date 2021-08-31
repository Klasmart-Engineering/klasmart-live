import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { }
  }
}

export default function RoomTest() {
  return (<>
    hey
  </>
  )
}
