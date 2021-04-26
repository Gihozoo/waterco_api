import Route from "../models/routes.model.js"

// Add a route
export async function addRoute(req, res) {
    try {
        let route = await Route.create(req.body);
        if (route) {
            res.status(200).json({
                success: true,
                message: 'route created successfully',
                data: route
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'route could not be created at this time'
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

// View a route
export async function viewRoutes(req, res) {
    try {
        let allroutes = await Route.findAll();
        if (allroutes) {
            res.json({
                success: true,
                message: 'route records retrieved successfully',
                data: allroutes
            })
        } 
        else {
            res.json({
                success: true,
                message: 'No route records found.',
                data: allroutes
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


// Update route record
export async function updateRoute(req, res) {
    try {
        let allroutes = await Route.update(
           (req.body),
          {where: {route_id: req.params.id}}
        )
        if (allroutes) {
            res.json({
                success: true,
                message: 'route records updated successfully',
                data:allroutes
            })
        } else {
            res.json({
                success: true,
                message: 'No route records found.',
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
