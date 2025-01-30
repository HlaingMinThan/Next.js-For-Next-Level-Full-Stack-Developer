function page({ params } : { params :  { id : string }}) {
  return (
    <div>posts page {params.id}</div>
  )
}

export default page