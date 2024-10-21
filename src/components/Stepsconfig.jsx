
import Stepno1 from './Stepno1';
import Stepno2 from './Stepno2';
import Stepno3 from './Stepno3';
import Stepno4 from './Stepno4';
import Stepno5 from './Stepno5';
import Stepno6 from './Stepno6';
import Stepno7 from './Stepno7';

const Stepsconfig = [
    {
        component: Stepno1,
        props: (sharedProps) => ({
          name: sharedProps.name,
          setName: sharedProps.setName,
          formdata: sharedProps.formdata,
          setformdata: sharedProps.setformdata,
          checked: sharedProps.checked,
          setChecked: sharedProps.setChecked,
        }),
      },
      {
        component: Stepno2,
        props: (sharedProps) => ({
          name: sharedProps.name,
          work: sharedProps.work,
          setWork: sharedProps.setWork,
          formdata: sharedProps.formdata,
          setformdata: sharedProps.setformdata,
        }),
      },
      {
        component: Stepno3,
        props: (sharedProps) => ({
          name: sharedProps.name,
          team: sharedProps.team,
          setteam: sharedProps.setteam,
          formdata: sharedProps.formdata,
          setformdata: sharedProps.setformdata,
        }),
      },
      {
        component: Stepno4,
        props: (sharedProps) => ({
          name: sharedProps.name,
          emailOne: sharedProps.emailOne,
          setemailOne: sharedProps.setemailOne,
          emailTwo: sharedProps.emailTwo,
          setemailTwo: sharedProps.setemailTwo,
          emailThree: sharedProps.emailThree,
          setemailThree: sharedProps.setemailThree,
          formdata: sharedProps.formdata,
          setformdata: sharedProps.setformdata,
        }),
      },
      {
        component: Stepno5,
        props: (sharedProps) => ({
          name: sharedProps.name,
          applies: sharedProps.applies,
          setapplies: sharedProps.setapplies,
          formdata: sharedProps.formdata,
          setformdata: sharedProps.setformdata,
        }),
      },
      {
        component: Stepno6,
        props: (sharedProps) => ({
          name: sharedProps.name,
          figmaProduct: sharedProps.figmaProduct,
          setfigmaProduct: sharedProps.setfigmaProduct,
          formdata: sharedProps.formdata,
          setformdata: sharedProps.setformdata,
        }),
      },
      {
        component: Stepno7,
        props: (sharedProps) => ({
          choosePlan: sharedProps.choosePlan,
          setchoosePlan: sharedProps.setchoosePlan,
          formdata: sharedProps.formdata,
          setformdata: sharedProps.setformdata,
        }),
      },
        {
        component: Stepno7,
        props: (sharedProps) => ({
          choosePlan: sharedProps.choosePlan,
          setchoosePlan: sharedProps.setchoosePlan,
          formdata: sharedProps.formdata,
          setformdata: sharedProps.setformdata,
        }),
      },
];

export default Stepsconfig;
