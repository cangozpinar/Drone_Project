
"use strict";

let ESCStatus = require('./ESCStatus.js');
let LandingTarget = require('./LandingTarget.js');
let GPSRAW = require('./GPSRAW.js');
let PositionTarget = require('./PositionTarget.js');
let ParamValue = require('./ParamValue.js');
let Altitude = require('./Altitude.js');
let GPSINPUT = require('./GPSINPUT.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let ManualControl = require('./ManualControl.js');
let RTCM = require('./RTCM.js');
let RadioStatus = require('./RadioStatus.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let State = require('./State.js');
let WaypointList = require('./WaypointList.js');
let DebugValue = require('./DebugValue.js');
let Thrust = require('./Thrust.js');
let RCOut = require('./RCOut.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let VFR_HUD = require('./VFR_HUD.js');
let WaypointReached = require('./WaypointReached.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let Mavlink = require('./Mavlink.js');
let MountControl = require('./MountControl.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let HomePosition = require('./HomePosition.js');
let Param = require('./Param.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let HilControls = require('./HilControls.js');
let ExtendedState = require('./ExtendedState.js');
let FileEntry = require('./FileEntry.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let ESCInfo = require('./ESCInfo.js');
let LogEntry = require('./LogEntry.js');
let HilGPS = require('./HilGPS.js');
let HilSensor = require('./HilSensor.js');
let GPSRTK = require('./GPSRTK.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let VehicleInfo = require('./VehicleInfo.js');
let LogData = require('./LogData.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let RCIn = require('./RCIn.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let BatteryStatus = require('./BatteryStatus.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let Vibration = require('./Vibration.js');
let RTKBaseline = require('./RTKBaseline.js');
let ActuatorControl = require('./ActuatorControl.js');
let StatusText = require('./StatusText.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let Trajectory = require('./Trajectory.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let Waypoint = require('./Waypoint.js');
let CommandCode = require('./CommandCode.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');

module.exports = {
  ESCStatus: ESCStatus,
  LandingTarget: LandingTarget,
  GPSRAW: GPSRAW,
  PositionTarget: PositionTarget,
  ParamValue: ParamValue,
  Altitude: Altitude,
  GPSINPUT: GPSINPUT,
  EstimatorStatus: EstimatorStatus,
  ManualControl: ManualControl,
  RTCM: RTCM,
  RadioStatus: RadioStatus,
  CompanionProcessStatus: CompanionProcessStatus,
  State: State,
  WaypointList: WaypointList,
  DebugValue: DebugValue,
  Thrust: Thrust,
  RCOut: RCOut,
  AttitudeTarget: AttitudeTarget,
  VFR_HUD: VFR_HUD,
  WaypointReached: WaypointReached,
  HilActuatorControls: HilActuatorControls,
  Mavlink: Mavlink,
  MountControl: MountControl,
  OverrideRCIn: OverrideRCIn,
  HomePosition: HomePosition,
  Param: Param,
  ESCTelemetry: ESCTelemetry,
  OpticalFlowRad: OpticalFlowRad,
  HilControls: HilControls,
  ExtendedState: ExtendedState,
  FileEntry: FileEntry,
  WheelOdomStamped: WheelOdomStamped,
  ESCInfo: ESCInfo,
  LogEntry: LogEntry,
  HilGPS: HilGPS,
  HilSensor: HilSensor,
  GPSRTK: GPSRTK,
  GlobalPositionTarget: GlobalPositionTarget,
  VehicleInfo: VehicleInfo,
  LogData: LogData,
  ESCTelemetryItem: ESCTelemetryItem,
  RCIn: RCIn,
  ESCStatusItem: ESCStatusItem,
  BatteryStatus: BatteryStatus,
  ADSBVehicle: ADSBVehicle,
  Vibration: Vibration,
  RTKBaseline: RTKBaseline,
  ActuatorControl: ActuatorControl,
  StatusText: StatusText,
  MagnetometerReporter: MagnetometerReporter,
  ESCInfoItem: ESCInfoItem,
  TimesyncStatus: TimesyncStatus,
  Trajectory: Trajectory,
  PlayTuneV2: PlayTuneV2,
  NavControllerOutput: NavControllerOutput,
  Waypoint: Waypoint,
  CommandCode: CommandCode,
  OnboardComputerStatus: OnboardComputerStatus,
  CamIMUStamp: CamIMUStamp,
  HilStateQuaternion: HilStateQuaternion,
};
