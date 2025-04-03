export const createUser = async(req,res)=>{
    try{
        const {User} = globalThis.sequelize.models;
        const {name,email} = req.body;
        if(!name || !email){
            return res.status(400).json({success: false, message: "name and  email are required..."})
        }
        const newUser = await User.create({name,email});
        res.status(201).json({success: true, message: "user date created", data: newUser})
    } catch(error){
        res.status(500).json({success: false, message: "error creating user", error: error.message})
    }
}

// get all users
export const getAllUsers = async (req,res) =>{
    try {
        const {User,Post} = global.sequelize.models;
        const users = await User.findAll({
            include:[
                {
                    model: Post,
                    as: "posts",
                    attributes: ["id", "title", "content", "createdAt"],

                },              
            ],
            order: [["id", "DESC"]],
        });
        res.status(200).json({success: true, data: "users"});
    }  catch(error){
        res.status(500).json({
            success: false,
            message: "Error fetching users",
            error:error.message,
        });
    }
};

export const getUserById = async (req,res)=>{
    try{
        const {User,Post} = global.sequelize.models;
        const {id} = req.params;
        
        const user = await user.findByPk(id,{
            include:[
                {
                    model: Post,
                    as: "posts",
                    attributes: ["id","title", "content", "createdAt"],
                },
            ],
        });

        if(!user){
            return res.status(404).json({success: false, message: "user not found"})
        }

        res.status(200).json({success: true, data: user});
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Error fetching user",
            error: error.message,
        });
    }
};