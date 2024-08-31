MediaSourceHandle.exports = {
    apps : [

        {
            name : "inventort-management",
            script: "npm",
            args: "run dev",
            env : {
                NODE_ENV: "development",
                ENV_VAR: "enviroment-variable",
            }
        }
       

    ]
}