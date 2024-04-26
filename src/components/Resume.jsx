import {React} from 'react'

const PDF_FILE_URL = 'Resume.pdf'
const Resume = () => {
const downloadFileAtURL = (url) => {
    const fileName = 'Resume.pdf'
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
}
  return (
    <div className='max-w-[1200px] mx-auto sm:py-20 p-5' id="resume">
      <div className='text-center'>
        <h2 className='text-4xl text-white font-bold leading-tight primary-color mb-10'>Contact Me</h2>
        <h3 className='text-center ml-3'><button onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}className='download shadow-button px-6 py-3 rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:border-none'>Download Resume</button></h3>
      </div>

      <div className='md:grid md:grid-cols-2  mt-10'>
        <div className='text-white md:border-r md:border-gray-500 pt-5 text-center'>
          <h1 className='primary-color text-3xl font-bold mb-5'>Front-end Proficiencies</h1>
          <ul className='text-xl mb-5 text-left ml-16 md:ml-40' style={{ listStyleType: 'circle' }}>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>TailwindCSS</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </div>

        <div className='text-white pt-5 text-center'>
          <h1 className='primary-color text-3xl font-bold mb-5'>Back-end Proficiencies</h1>
          <ul className='text-xl text-left ml-16 md:ml-40' style={{ listStyleType: 'circle' }}>
            <li>Web APIs</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL/Sequelize</li>
            <li>MongoDB/Mongoose</li>
            <li>Rest</li>
            <li>GraphQL</li>
            <li>DevTools</li>
            <li>Insomnia</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Resume