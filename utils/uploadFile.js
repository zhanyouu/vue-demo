const {promisify}=require('util')
const path=require('path')
const fs=require('fs')
const remaneAsync=promisify(fs.rename)
const readFileAsync=promisify(fs.readFile)

const multer=require('multer')
const MD5=require('md5')

var Picture=require('./../server/db/bufferLayer1/bufferLayer1').Picture

module.exports.upload = (destination, fieldName) => {
	const storage = multer.diskStorage({
		destination
	})
	const upload = multer({ 
		storage, 
		limits: {
			files: 1,
			fileSize: 10485760, //10M
			parts: 1
		},
		fileFilter: (req, file, cb) => {
			if(/^(.+)\.(.+)$/.test(file.originalname)){
				cb(null, true)
			}else{
				// cb(null, false)
				cb(new Error('文件需要有后缀名'))
			}
		}
	})
	return upload.single(fieldName)

}

module.exports.uploadRes = async (req, res) => {
	try{
		let match = req.file.originalname.match(/^(.+)\.(.+)$/)
		let buffer = await readFileAsync(path.join(req.file.destination, req.file.filename))
		let md5 = MD5(buffer)
		let newName = match[1] + '-' + md5 + '.' + match[2]
		let originalname=req.file.originalname
		//向Picture表中插入数据
		Picture.update({'picUrl':newName},{'where':{'picName':originalname}})
		await remaneAsync(path.join(req.file.destination, req.file.filename), path.join(req.file.destination, newName))
		res.json({
			status:'0',
			name: newName
		})
	}catch(e){
		console.log(e)
		res.json({
			status:'1'
		})
	}
}
