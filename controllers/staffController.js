import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import Staff from "../models/staff.model.js"

dotenv.config();

// Add a staff
export async function addUser(req, res) {
    try {
        bcrypt.hash(req.body.password, 10).then(async (hash) => {
            let userObj = {
                email_address: req.body.email_address,
                password: hash,
                full_name: req.body.full_name
            }
            let staff = await Staff.create(userObj);
            if (staff) {
                res.status(200).json({
                    success: true,
                    message: 'Staff created successfully',
                    data: staff
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Staff could not be created at this time'
                })
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Sign In
export async function signIn(req, res) {
    //Get a user with the email address
    //Ensure that their password is correct
    //Create a JWT for them. (For Authenticating Other API Requests)
    try {
        let staff = await Staff.findOne({ where: { email_address: req.body.email_address } })
        if (!staff) {
            return res.status(401).json({
                status: failed,
                message: "Authentication Failed: User with email address not found."
            })
        }
        bcrypt.compare(req.body.password, staff.password).then(response => {
            if (!response) {
                return res.status(401).json({
                    status: failed,
                    message: "Authentication Failed: Incorrect password."
                })
            }
            let authToken = jwt.sign({ email_address: staff.email_address, staff_id: staff.staff_id },
                process.env.AUTH_KEY, { expiresIn: "1h" });
            return res.status(200).json({
                status: true,
                message: "Staff authentication successful",
                user: { full_name: staff.full_name, email_address: staff.email_address, staff_id: staff.staff_id },
                token: authToken,
                expiresIn: 3600
            })
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}


// View all staffs
export async function viewAllUsers(req, res) {
    try {
        let allstaffs = await Staff.findAll();
        if (allstaffs) {
            res.json({
                success: true,
                message: 'staff records retrieved successfully',
                data: allstaffs
            })
        } else {
            res.json({
                success: true,
                message: 'No staff records found.',
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

// Update staff record
export async function updateStaff(req, res) {
    try {
        let allstaffs = await Staff.update(
           (req.body),
          {where: {staff_id: req.params.id}}
        )
        if (allstaffs) {
            res.json({
                success: true,
                message: 'Staff records updated successfully',
                data:allstaffs
            })
        } else {
            res.json({
                success: true,
                message: 'No staff records found.',
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

// Delete a staff
export async function deleteStaff(req, res) {
    try {
        let allstaffs = await Staff.destroy({where: {staff_id: req.params.id}});
        if (allstaffs) {
            res.json({
                success: true,
                message: 'Staff records deleted successfully',
                data: allstaffs
            })
        } else {
            res.json({
                success: true,
                message: 'No Staff records found.',
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

