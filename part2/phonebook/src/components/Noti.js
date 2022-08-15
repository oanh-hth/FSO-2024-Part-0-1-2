import '../index.css'

const Noti = ({ message, className }) => {
    if (message === null) {
        return null
      }
    
      return (
          <div className={`${className} noti`}>
          {message}
        </div>
      )
}

export default Noti