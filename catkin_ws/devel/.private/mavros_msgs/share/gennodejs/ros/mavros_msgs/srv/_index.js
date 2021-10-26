
"use strict";

let StreamRate = require('./StreamRate.js')
let FileRemove = require('./FileRemove.js')
let CommandHome = require('./CommandHome.js')
let FileMakeDir = require('./FileMakeDir.js')
let LogRequestData = require('./LogRequestData.js')
let LogRequestList = require('./LogRequestList.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let FileChecksum = require('./FileChecksum.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let FileList = require('./FileList.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let MountConfigure = require('./MountConfigure.js')
let FileRename = require('./FileRename.js')
let CommandInt = require('./CommandInt.js')
let FileWrite = require('./FileWrite.js')
let WaypointPull = require('./WaypointPull.js')
let ParamGet = require('./ParamGet.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let MessageInterval = require('./MessageInterval.js')
let WaypointClear = require('./WaypointClear.js')
let WaypointPush = require('./WaypointPush.js')
let FileTruncate = require('./FileTruncate.js')
let ParamPush = require('./ParamPush.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let FileRead = require('./FileRead.js')
let ParamPull = require('./ParamPull.js')
let FileClose = require('./FileClose.js')
let CommandBool = require('./CommandBool.js')
let CommandLong = require('./CommandLong.js')
let FileOpen = require('./FileOpen.js')
let CommandTOL = require('./CommandTOL.js')
let ParamSet = require('./ParamSet.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let CommandAck = require('./CommandAck.js')
let SetMode = require('./SetMode.js')
let SetMavFrame = require('./SetMavFrame.js')

module.exports = {
  StreamRate: StreamRate,
  FileRemove: FileRemove,
  CommandHome: CommandHome,
  FileMakeDir: FileMakeDir,
  LogRequestData: LogRequestData,
  LogRequestList: LogRequestList,
  LogRequestEnd: LogRequestEnd,
  FileChecksum: FileChecksum,
  FileRemoveDir: FileRemoveDir,
  FileList: FileList,
  WaypointSetCurrent: WaypointSetCurrent,
  CommandVtolTransition: CommandVtolTransition,
  MountConfigure: MountConfigure,
  FileRename: FileRename,
  CommandInt: CommandInt,
  FileWrite: FileWrite,
  WaypointPull: WaypointPull,
  ParamGet: ParamGet,
  CommandTriggerInterval: CommandTriggerInterval,
  MessageInterval: MessageInterval,
  WaypointClear: WaypointClear,
  WaypointPush: WaypointPush,
  FileTruncate: FileTruncate,
  ParamPush: ParamPush,
  VehicleInfoGet: VehicleInfoGet,
  FileRead: FileRead,
  ParamPull: ParamPull,
  FileClose: FileClose,
  CommandBool: CommandBool,
  CommandLong: CommandLong,
  FileOpen: FileOpen,
  CommandTOL: CommandTOL,
  ParamSet: ParamSet,
  CommandTriggerControl: CommandTriggerControl,
  CommandAck: CommandAck,
  SetMode: SetMode,
  SetMavFrame: SetMavFrame,
};
