import Premise from "../models/premise.model.js"

// Add a premise
export async function addPremise(req, res) {
    try {
        let premise = await Premise.create(req.body);
        if (premise) {
            res.status(200).json({
                success: true,
                message: 'premise created successfully',
                data: premise
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'premise could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View a premise
export async function viewPremise(req, res) {
    try {
        let allpremises = await Premise.findAll({where: {premise_id: req.params.id}});
        if (allpremises) {
            res.json({
                success: true,
                message: 'premise records retrieved successfully',
                data: allpremises
            })
        } 
        else {
            res.json({
                success: true,
                message: 'No premise records found.',
                data: allpremises
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View all premises
export async function viewAllPremises(req, res) {
    try {
        let allpremises = await Premise.findAll();
        if (allpremises) {
            res.json({
                success: true,
                message: 'premise records retrieved successfully',
                data: allpremises
            })
        } else {
            res.json({
                success: true,
                message: 'No premise records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// Update premise record
export async function updatePremise(req, res) {
    try {
        let allpremises = await Premise.update(
           (req.body),
          {where: {premise_id: req.params.id}}
        )
        if (allpremises) {
            res.json({
                success: true,
                message: 'premise records updated successfully',
                data:allpremises
            })
        } else {
            res.json({
                success: true,
                message: 'No premise records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View a member premise
export async function viewMemberPremise(req, res) {
    try {
        let allpremises = await Premise.findAll({where: {member_id: req.params.id}});
        if (allpremises) {
            res.json({
                success: true,
                message: 'premise records retrieved successfully',
                data: allpremises
            })
        } 
        else {
            res.json({
                success: true,
                message: 'No premise records found.',
                data: allpremises
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

           
