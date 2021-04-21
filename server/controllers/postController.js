const Post = require('../models/postModel')

const getPost = async (req, res) => {
	const { id } = req.params
	try {
		const post = await Post.findById(id)
		res.status(200).json(post)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getPosts = async (req, res) => {
	try {
		const posts = await Post.find({})
		res.status(200).json(posts)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const addPost = async (req, res) => {
	const post = req.body

	try {
		const createdPost = await Post.create(post)

		res.json(createdPost)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const updatePost = async (req, res) => {
	const { id } = req.params
	const post = req.body

	try {
		const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true })

		res.json(updatedPost)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const deletePost = async (req, res) => {
	const { id } = req.params

	try {
		await Post.findByIdAndRemove(id)

		res.json({ message: 'Successfully deleted' })
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

module.exports = { getPosts, addPost, getPost, updatePost, deletePost }
