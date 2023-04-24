const Panel = () => {
  return <div>
  </div>
}

const Exhibit = ({
  children,
  heading
}) => {

  return <div className="exhibit">
    <h2 className="exhibit-heading">{heading}</h2>
    <div className="exhibit-content">
      {children}
    </div>
  </div> 
}

export default Exhibit;
