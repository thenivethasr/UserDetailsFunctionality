const API = require("../utils/API/ApiRequestByPut");
const AuraConstants = require("../utils/auraUtils/AuraConstants");
const errorMessage = require("../utils/messages/errorMessages");
const { AuraMessage, getAsBoolean, isEmpty } = require("../utils/auraUtils/Aura");
const { AuraException, httpStatusCodes } = require("../utils/auraUtils/AuraError");


var preRequestValidation = function (req, res, next)
{
    console.log("API validation started...");
    
    let isApiValid = false;
    for (const endPoint in API)
    {
        console.log("API " + endPoint);
        if (req.url === API[endPoint].api)
        {
            isApiValid = true;
            const params = API[endPoint].param;
            const body = req.body;

            for (const node in body)
            {
                // If there is an extra param in response object throw error
                if (isEmpty(params[node]))
                {
                    return new AuraException(res, "Error", httpStatusCodes.BAD_REQUEST, "Extra Param Found");
                }
            }
            
            {
                const paramAttribute = params[node];
                const reqBodyNode = body[node];

                if (getAsBoolean(paramAttribute[AuraConstants.REQUIRED]) && isEmpty(reqBodyNode))
                {
                    return new AuraException(res, "Error", httpStatusCodes.BAD_REQUEST, AuraMessage.getMessage(node, errorMessage.REQUIRED));
                }

                if (!getAsBoolean(paramAttribute[AuraConstants.REQUIRED]) && isEmpty(reqBodyNode))
                {
                    continue;
                }

                for (const attribute in paramAttribute)
                {
                    const attributeValue = paramAttribute[attribute];

                    if (attribute === AuraConstants.TYPE && !getAsBoolean(typeof reqBodyNode === attributeValue))
                    {
                        return new AuraException(res, "Error", httpStatusCodes.BAD_REQUEST, AuraMessage.getMessage(node, errorMessage.INVALID_DATA_TYPE));
                    }
                    
                    if (attribute === AuraConstants.MIN_LEN && reqBodyNode.toString().length < attributeValue)
                    {
                        return new AuraException(res, "Error", httpStatusCodes.BAD_REQUEST, AuraMessage.getMessage([node, attributeValue], errorMessage.MIN_LEN));
                    }

                    if (attribute === AuraConstants.MAX_LEN && reqBodyNode.toString().length > attributeValue)
                    {
                        return new AuraException(res, "Error", httpStatusCodes.BAD_REQUEST, AuraMessage.getMessage([node, attributeValue], errorMessage.MAX_LEN));
                    }
                }
                
            }
            break;
        }

    }
    if (!isApiValid)
    {
        return new AuraException(res, "Error", httpStatusCodes.BAD_REQUEST, errorMessage.INVALID_URL);
    }

    next();
}

module.exports = preRequestValidation;