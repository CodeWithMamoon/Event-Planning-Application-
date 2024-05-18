import Messages from "../model/messageSchema/js"


export const Message= async (req,res)=>{
    const [name,email,subject,message]=req.body;
    if(!name || !email || !subject || !message){
        return res.status.json({
            success:false,
            message:"All fied are required"
        })

        await Messages.create({name,email,subject,message})
        res.status(200).json({
            success:true,
            message:"message sent sucessful"
        })

    }

}