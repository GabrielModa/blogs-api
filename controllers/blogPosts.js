const { BlogPost, Category, User } = require('../models');

const post = async (req, res) => {
   const { title, content, categoryIds } = req.body;

   const allCategory = await Category.findAll();
   const getCategoryById = allCategory.map(({ id }) => id);
   
   const checkId = categoryIds.every((id) => getCategoryById.includes(id));
   if (!checkId) return res.status(400).json({ message: '"categoryIds" not found' });

   const findToken = await User.findOne({ where: { email: req.tokenData } });

   const newPost = await BlogPost.create(
     { userId: findToken.id,
      title,
      content },
  );

   res.status(201).json(newPost);
};

const getPost = async (req, res) => {
    const getPostAssociate = await BlogPost.findAll({
      include: [{ 
        model: User, 
         as: 'user',
          attributes: { exclude: ['password'] },
        }, 
        { model: Category,
           as: 'categories',
           }],
       });
       
  return res.status(200).json(getPostAssociate);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

    const postId = await BlogPost.findByPk(id);

    const getPostAssociate = await BlogPost.findOne({ where: postId,
      include: [{ 
        model: User, 
         as: 'user',
          attributes: { exclude: ['password'] },
        }, 
        { model: Category,
           as: 'categories',
           }],
       });
    if (!postId) return res.status(404).json({ message: 'Post does not exist' });

    console.log(postId);
    return res.status(200).json(getPostAssociate);
};

module.exports = {
  post,
  getPost,
  getPostById,
};
