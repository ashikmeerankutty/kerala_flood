import { Rescue } from '../database/'

export const newRequest = (req,res) => {
    try{
        let currentTime = new Date();
        let rescue = new Rescue({name: req.body.name ,phone: req.body.phone, priority : req.body.priority, description: req.body.description, date : currentTime});
        rescue.save()
        res.json({status:'Added'})
    }
    catch (e){
        res.json({status:'Failed'})
    }
}

export const getRequests = (req,res) =>
{
    try
    {
        let rescues = Rescue.find({}).sort('-date').exec(function(err, docs) {
            if(err)
            {
                console.log(err)
            }
            else
            {
                res.send(docs)
            }
         })
    }
    catch(e)
    {
        res.json({status:'Failed'})
    }
}