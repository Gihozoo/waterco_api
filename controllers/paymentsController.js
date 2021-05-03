import Payment from "../models/payments.model.js"

// capture a payment
export async function capturePayment(req, res) {
    try {
        let payment = await Payment.create(req.body);
        if (payment) {
            res.status(200).json({
                success: true,
                message: 'payment created successfully',
                data: payment
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'payment could not be created at this time'
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

// View a payment
export async function ViewPaymentByPremise(req, res) {
    try {
        let allpayments = await Payment.findAll({where: {premise_id: req.params.id}});
        if (allpayments) {
            res.json({
                success: true,
                message: 'payment records retrieved successfully',
                data: allpayments
            })
        } 
        else {
            res.json({
                success: true,
                message: 'No payment records found.',
                data: allpayments
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

// View all payments
export async function viewAllPayments(req, res) {
    try {
        let allpayments = await Payment.findAll();
        if (allpayments) {
            res.json({
                success: true,
                message: 'payment records retrieved successfully',
                data: allpayments
            })
        } else {
            res.json({
                success: true,
                message: 'No payment records found.',
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

