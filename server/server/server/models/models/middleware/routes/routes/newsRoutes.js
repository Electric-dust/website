const router = require("express").Router()
const News = require("../models/News")
const auth = require("../middleware/auth")

router.get("/", async(req,res)=>{
    const news = await News.find().populate("author","name")
    res.json(news)
})

router.get("/top", async(req,res)=>{
    const news = await News.find().sort({createdAt:-1}).limit(6)
    res.json(news)
})

router.get("/:id", async(req,res)=>{
    const news = await News.findById(req.params.id)
    res.json(news)
})

router.post("/", auth, async(req,res)=>{
    const news = await News.create({
        ...req.body,
        author:req.user.id
    })
    res.json(news)
})

router.put("/:id", auth, async(req,res)=>{
    const news = await News.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(news)
})

router.delete("/:id", auth, async(req,res)=>{
    await News.findByIdAndDelete(req.params.id)
    res.json({msg:"Deleted"})
})

module.exports = router
