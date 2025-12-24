
export const creatUser = async(req,res)=>{
    try{
        const {user} = global.sequelize.models;
        const {name,email} = req.body;
    
        if(!name || !email){
            return res.status(400).json({sucess:false, message: "name and email not found"})
        }
    
        const newuser = await user.create({name,email});
        res.status(201).json({success: true, data: newuser})
    } catch(error){
        res.status(500).json({sucess: false, message: "error in creating user", error: error.message})
    }
    }
      
    // full crud...
    export const getAllUsers = async (req, res) => {
        try {
          const { User, Post } = global.sequelize.models;
      
          const users = await User.findAll({
            include: [
              {
                model: Post,
                as: "posts",
                attributes: ["id", "title", "content", "createdAt"],
              },
            ],
            order: [["id", "DESC"]],
          });
          
          res.status(200).json({ success: true, data: users });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: "Error fetching users",
            error: error.message,
          });
        }
      };
      
      export const getUserById = async (req, res) => {
        try {
          const { User, Post } = global.sequelize.models;
          const { id } = req.params;
      
          const user = await User.findByPk(id, {
            include: [
              {
                model: Post,
                as: "posts",
                attributes: ["id", "title", "content", "createdAt"],
              },
            ],
          });
      
          if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
          }
      
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: "Error fetching user",
            error: error.message,
          });
        }
      };
      
      export const createUser = async (req, res) => {
        try {
          const { User } = global.sequelize.models;
          const { name, email } = req.body;
      
          if (!name || !email) {
            return res.status(400).json({ success: false, message: "Name and Email are required" });
          }
      
          const newUser = await User.create({ name, email });
          res.status(201).json({ success: true, data: newUser });
        } catch (error) {
          res.status(500).json({ success: false, message: "Error creating user", error: error.message });
        }
      };
      
      export const updateUser = async (req, res) => {
        try {
          const { User } = global.sequelize.models;
          const { id } = req.params;
          const { name, email } = req.body;
      
          const user = await User.findByPk(id);
          if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
          }
      
          await user.update({ name, email });
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(500).json({ success: false, message: "Error updating user", error: error.message });
        }
      };
       
      export const deleteUser = async (req, res) => {
        try {
          const { User } = global.sequelize.models;
          const { id } = req.params;
      
          const user = await User.findByPk(id);
          if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
          }
      
          await user.destroy();
          res.status(200).json({ success: true, message: "User deleted successfully" });
        } catch (error) {
          res.status(500).json({ success: false, message: "Error deleting user", error: error.message });
        }
      };
      