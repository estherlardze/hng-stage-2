import { RotatingLines } from 'react-loader-spinner'


export default function index({ message }) {
  return (
    <div className='absolute top-[90%] left-[50%]'>
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
        <div>{ message } </div>
    </div>
  )
}
