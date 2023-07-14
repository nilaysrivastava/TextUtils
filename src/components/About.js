import React, {useState} from 'react'

export default function About(props) {
    const [myStyle, setMyStyle]=useState({
        color: 'black',
        backgroundColor: '#f8f9fa',
        borderRadius: '15px',
        padding: '10px'
    })
    const [btnText, setBtnText] = useState("Black")
    // const toggleStyle=()=>{
    //     if(myStyle.color==='white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor:'#0d6efd',
    //             borderRadius: '15px'
    //         })
    //         setBtnText("Black")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor:'black',
    //             borderRadius: '15px'
    //         })
    //         setBtnText("Blue")
    //     }
    // }
  return (
    <div className={`container mx-2 my-2 container-${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} style={myStyle}>
        <h1>About Us:</h1>
        <p>Introducing TextUtils: Your Ultimate Text Transformation Playground! 🎉🔤💥</p>
<p>
Welcome to TextUtils, the one-stop destination for all your text-related needs! We believe that working with text should be fun, convenient, and hassle-free. Say goodbye to the days of manually formatting text—TextUtils is here to make your life easier. 💪💻</p>
<p>
With our innovative online platform, you have the power to effortlessly transform your text in a variety of ways. Need to convert a chunk of text to lowercase? No problem! Want to make it all uppercase for added emphasis? Consider it done! Clearing out unnecessary clutter? We've got you covered! TextUtils offers a wide array of tools that empower you to manipulate your text exactly as you envision. ✨🔠✏️</p>
<p>
But that's not all—we go beyond the basics. Copying your transformed text with a single click? Check. Removing unnecessary line breaks for seamless readability? Absolutely! Our intuitive interface ensures that you can navigate and utilize our features with ease. We've designed TextUtils to be your trusted companion, always ready to simplify your text-related tasks. 🎯🚀</p>
<p>
Whether you're a student, a professional, or someone who works with text on a regular basis, TextUtils is your virtual playground for all things text transformation. Our goal is to provide you with a seamless experience, making your interaction with text a delightful journey. 💫🌟

</p>
<p>
So, why wait? Unleash your creativity, streamline your workflows, and make the most of your text with TextUtils. Join our growing community of text enthusiasts today and revolutionize the way you handle text—one character at a time! 🌈🔣🔡</p> 
{/* <div className="container my-3">
<button onClick={toggleStyle} type="botton" className="btn btn-dark bg-dark btn-outline-primary mx-2 my-3">{btnText}</button>
</div> */}
    </div>
  )
}
