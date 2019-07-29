﻿using System;
using System.Collections.Generic;

namespace EP.Sudoku.Data.Models
{
    /// <summary>    
    ///Represents an auxiliary tool, that helps to solve sudoku (DbInfo).
    /// </summary>
    public class PencilDb
    {
        /// <summary>    
        /// Is used to denote an identification value of a pencil (DbInfo).
        /// </summary>
        public long Id { get; set; }

        /// <summary>    
        /// Is used to denote the possibility to enter the value (number) 1 in the CellId (DbInfo).
        /// </summary>
        public bool IsValue1 { get; set; }

        /// <summary>    
        /// Is used to denote the possibility to enter the value (number) 2 in the CellId (DbInfo).
        /// </summary>
        public bool IsValue2 { get; set; }

        /// <summary>    
        /// Is used to denote the possibility to enter the value (number) 3 in the CellId (DbInfo).
        /// </summary>
        public bool IsValue3 { get; set; }

        /// <summary>    
        /// Is used to denote the possibility to enter the value (number) 4 in the CellId (DbInfo).
        /// </summary>
        public bool IsValue4 { get; set; }

        /// <summary>    
        /// Is used to denote the possibility to enter the value (number) 5 in the CellId (DbInfo).
        /// </summary>
        public bool IsValue5 { get; set; }

        /// <summary>    
        /// Is used to denote the possibility to enter the value (number) 6 in the CellId (DbInfo).
        /// </summary>
        public bool IsValue6 { get; set; }

        /// <summary>    
        /// Is used to denote the possibility to enter the value (number) 7 in the CellId (DbInfo).
        /// </summary>
        public bool IsValue7 { get; set; }

        /// <summary>    
        /// Is used to denote the possibility to enter the value (number) 8 in the CellId (DbInfo).
        /// </summary>
        public bool IsValue8 { get; set; }

        /// <summary>    
        /// Is used to denote the possibility to enter the value (number) 9 in the CellId (DbInfo).
        /// </summary>
        public bool IsValue9 { get; set; }

        public List<CellDb> Squares { get; set; }
    }
}
