import Food from '../models/Foods';

export function getAllFoods(req, res, next) {
    Food.find((err, foods) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({foods});
    });
}

export function getFoodById(req, res, next) {
  const id = req.params.id;  

  Food.findById(id, (err, food) => {
    if(err) {
        res.status(500).json({err});
    }
    res.status(200).json({food});
  });
}

export function createFood(req, res, next) {
    const name = req.body.name;
    const state = req.body.state;
    const calories = req.body.calories;
    const proteins = req.body.proteins;
    const lipids = req.body.lipids;
    const carbohydrates = req.body.carbohydrates;
    const water = req.body.water;
    const ashes = req.body.ashes;

    
    console.log(req.body);
    if(!name) {
        res.status(422).json({err: 'Name is required.'});
        return;
    } 
    if(!state) {
        res.status(422).json({err: 'State is required.'});
        return;
    }
    if(!calories) {
        res.status(422).json({err: 'Calories is required.'});
        return;
    }
    if(!proteins) {
        res.status(422).json({err: 'Proteins is required.'});
        return;
    }
    if(!lipids) {
        res.status(422).json({err: 'Lipids is required.'});
        return;
    }
    if(!carbohydrates) {
        res.status(422).json({err: 'Carbohydrates is required.'});
        return;
    }
    if(!water) {
        res.status(422).json({err: 'Water is required.'});
        return;
    }
    if(!ashes) {
        res.status(422).json({err: 'Ashes is required.'});
        return;
    }

    const food = new Food({
        name,
        state,
        calories,
        proteins,
        lipids,
        carbohydrates,
        water,
        ashes
    });

    food.save((err, food) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({food});
    });
}

export function updateFood (req, res, next) {
    const id = req.params.id;

    Food.findByIdAndUpdate(id, req.body, (err, food) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({food});
    });
}

export function deleteFood(req, res, next) {
    const id = req.params.id;

    Food.findByIdAndRemove(id, (err, food) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({food});
    });

}