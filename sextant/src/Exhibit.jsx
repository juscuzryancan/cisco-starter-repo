const Panel = () => {
  return <div>
  </div>
}

const Exhibit = ({
  data
}) => {

  return <div className="exhibit">
    {data?.map((e) => <Panel />)}
  </div> 
}

export default Exhibit;
