import React from 'react'

const Handlechangeeffect = ({name,checked,work,team,emailThree,emailOne,emailTwo,applies,figmaProduct,choosePlan}) => {
    
    React.useEffect(() => {
        if (name) {
          localStorage.setItem('loadingTourStep1', name);
        }
        if (checked) {
          localStorage.setItem('loadingToureCheck', checked.toString());
        }
        if (work) {
                  localStorage.setItem('landingToureWork', work);
                }
                if (team) {
                    localStorage.setItem('LodingTourTeam', team);
                  }
                  if (emailOne) {
                    localStorage.setItem('loadingTourEmailOne', emailOne);
                  }
                  if (emailTwo) {
                    localStorage.setItem('loadingTourEmailTwo', emailTwo);
                  }
                  if (emailThree) {
                    localStorage.setItem('loadingTourEmailThree', emailThree);
                  }
                  if (applies && applies.length > 0) {
                    try {
                      localStorage.setItem('loadingTourApplies', JSON.stringify(applies));
                    } catch (error) {
                      console.error("Error saving selections:", error);
                    }
                  }
                  if (figmaProduct) {
                    localStorage.setItem('loadingTourFigmaProduct', figmaProduct)
                  }
                  if (choosePlan) {
                    localStorage.setItem('loadingTourChoosePlan', choosePlan)
                  }
      }, [name, checked,work,team,emailThree,emailOne,emailTwo,applies,figmaProduct,choosePlan])


  return (
    <div>
      
    </div>
  )
}

export default Handlechangeeffect
