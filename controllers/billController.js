import Bill from "../models/bill.model.js"

// capture a Bill
export async function captureBill(req, res) {
    try {
        let bill = await Bill.create(req.body);
        if (bill) {
            res.status(200).json({
                success: true,
                message: 'bill created successfully',
                data: bill
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'bill could not be created at this time'
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

// View a bill
export async function viewBill(req, res) {
    try {
        let allbills = await Bill.findAll({where: {bill_id: req.params.id}});
        if (allbills) {
            res.json({
                success: true,
                message: 'bill records retrieved successfully',
                data: allbills
            })
        } 
        else {
            res.json({
                success: true,
                message: 'No bill records found.',
                data: allbills
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